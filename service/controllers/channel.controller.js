import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import axios from "axios";

const YOUTUBE_BASE_URL = `${process.env.YOUTUBE_API_BASE_URL}/channels`;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const getChannelId = asyncHandler(async (req, res) => {
    const { channelUsername } = req.params;
    if (!channelUsername || channelUsername.trim() === "") {
        throw new APIError(400, "Channel username is required");
    }
    const response = await axios.get(
        `${YOUTUBE_BASE_URL}?part=id&forHandle=${channelUsername}&key=${YOUTUBE_API_KEY}`
    );
    const channelId = response?.data?.items[0].id;
    if (!channelId) {
        throw new APIError(
            404,
            "Channel ID not found. Please check the channel username"
        );
    }
    return res
        .status(200)
        .json(
            new APIResponse(
                200,
                { channelId },
                "Channel ID fetched successfully"
            )
        );
});

const getChannelDetails = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    if (!channelId || channelId.trim() === "") {
        throw new APIError(400, "Channel ID is required");
    }
    const response = await axios.get(
        `${YOUTUBE_BASE_URL}?part=brandingSettings,snippet,statistics,topicDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );
    const channelDetails = response?.data?.items[0];
    if (!channelDetails) {
        throw new APIError(
            404,
            "Channel details not found. Please check the channel ID"
        );
    }
    return res
        .status(200)
        .json(
            new APIResponse(
                200,
                { channelDetails },
                "Channel details fetched successfully"
            )
        );
});

export { getChannelId, getChannelDetails };
