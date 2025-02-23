import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ChannelData } from "../models/channelData.model.js";
import axios from "axios";

const YOUTUBE_BASE_URL = `${process.env.YOUTUBE_API_BASE_URL}`;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const extractVideoIds = (videos) => {
    let arr = [];
    videos.forEach((video) => {
        arr.push(video.id.videoId);
    });
    return arr;
};

const extractBestVideoIds = (videosStats) => {
    const videoDecisions = videosStats.map((video) => {
        const viewCount = parseInt(video.statistics.viewCount);
        const likeCount = parseInt(video.statistics.likeCount);
        const decision = Math.floor(viewCount / 2) + likeCount;
        return { id: video.id, decision };
    });

    videoDecisions.sort((a, b) => b.decision - a.decision);

    const bestVideoIds = videoDecisions.slice(0, 5).map((video) => video.id);

    return bestVideoIds;
};

const updateVideosInDB = async (channelId, recentVideoIds, bestVideoIds) => {
    if (!channelId || !recentVideoIds || !bestVideoIds) {
        throw new APIError(
            400,
            "Channel ID, recent video IDs and best video IDs are required"
        );
    }
    try {
        const channelData = await ChannelData.findOne({ channelId });
        if (!channelData) {
            const channel = new ChannelData({
                channelId,
                recentVideos: recentVideoIds,
                bestVideos: bestVideoIds,
            });
            await channel.save();
        } else {
            channelData.recentVideos = recentVideoIds;
            channelData.bestVideos = bestVideoIds;
            await channelData.save();
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const getVideos = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    if (!channelId || channelId.trim() === "") {
        throw new APIError(400, "Channel ID is required");
    }
    const videosInDB = await ChannelData.findOne({ channelId }).select(
        "recentVideos bestVideos updatedAt"
    );

    let needToRefresh = true;
    let maxResults = 50;
    if (videosInDB && Date.now() - videosInDB.updatedAt < 86400000) {
        maxResults = 5;
        needToRefresh = false;
    }
    const response = await axios.get(
        `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${YOUTUBE_API_KEY}`
    );
    const videos = response?.data?.items;
    const videoIds = extractVideoIds(videos);
    const recentVideoIds = videoIds.slice(0, 5);
    const videoStats = needToRefresh
        ? await getVideoStatsHelper(videoIds.join(","))
        : null;
    const bestVideoIds = needToRefresh
        ? extractBestVideoIds(videoStats)
        : videosInDB.bestVideos;
    const updated = await updateVideosInDB(
        channelId,
        recentVideoIds,
        bestVideoIds
    );
    if (!updated) {
        throw new APIError(500, "Failed to update videos in database");
    }
    if (!videos) {
        throw new APIError(
            404,
            "Videos not found. Please check the channel ID"
        );
    }
    return res
        .status(200)
        .json(
            new APIResponse(
                200,
                { recentVideoIds, bestVideoIds },
                "Recent videos fetched successfully"
            )
        );
});

const getVideoStatsHelper = async (videoIds) => {
    if (!videoIds) {
        throw new APIError(400, "Video IDs are required");
    }
    try {
        const response = await axios.get(
            `${YOUTUBE_BASE_URL}/videos?part=statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const videoStats = response?.data?.items;
        return videoStats;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getVideoStats = asyncHandler(async (req, res) => {
    const { videoIds } = req.params;
    if (!videoIds || videoIds.trim() === "") {
        throw new APIError(400, "Video IDs are required");
    }
    const videoStats = await getVideoStatsHelper(videoIds);
    if (!videoStats) {
        throw new APIError(
            404,
            "Video statistics not found. Please check the video IDs"
        );
    }
    return res
        .status(200)
        .json(
            new APIResponse(
                200,
                { videoStats },
                "Video statistics fetched successfully"
            )
        );
});

export { getVideos, getVideoStats };
