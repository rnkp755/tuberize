import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ChannelData } from "../models/channelData.model.js";
import { BASE_PROMPT } from "../utils/Prompt.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const timeout = 2000;
const maxCommentsEachVideo = 30;

const YOUTUBE_BASE_URL = `${process.env.YOUTUBE_API_BASE_URL}`;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const extractComments = async (videoIds) => {
    let comments = [];
    for (const videoId of videoIds) {
        const response = await axios.get(
            `${YOUTUBE_BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxCommentsEachVideo}&key=${YOUTUBE_API_KEY}`
        );
        const commentsResponse = response?.data?.items;
        commentsResponse.forEach((comment) => {
            let data = {
                commentId: comment.id,
                textOriginal:
                    comment.snippet.topLevelComment.snippet.textOriginal,
                authorDisplayName:
                    comment.snippet.topLevelComment.snippet.authorDisplayName,
                authorProfileImageUrl:
                    comment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl,
            };
            comments.push(data);
        });
    }
    return comments;
};

const parseComments = (inputString) => {
    // Use regex to find content inside <comments>...</comments> tags
    const regex = /<comments>(.*?)<\/comments>/s;
    const match = inputString.match(regex);

    if (match) {
        // Split the comma-separated values and return as an array
        return match[1].split(",");
    } else {
        // Return an empty array if no match is found
        return [];
    }
};

const filterBestComments = async (comments) => {
    let prompt = BASE_PROMPT + "<comments>";
    comments.forEach((comment) => {
        prompt +=
            "<id>" +
            comment.commentId +
            "</id><text>" +
            comment.textOriginal +
            "</text>";
    });
    prompt += "</comments>";
    try {
        const result = await model.generateContent(prompt);
        const extractedResult = result.response.text();
        const parsedResult = parseComments(extractedResult);
        return parsedResult;
    } catch (error) {
        console.error(error);
        throw new APIError(500, "Couldn't filter comments");
    }
};

const getBestComments = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    if (!channelId || channelId.trim() === "") {
        throw new APIError(400, "Channel ID is required");
    }
    let channelData = await ChannelData.findOne({ channelId });
    if (!channelData) {
        setTimeout(async () => {
            channelData = await ChannelData.findOne({ channelId });
        }, timeout);
        if (!channelData) {
            throw new APIError(404, "ChannelData not found in database");
        }
    }
    if (
        channelData.filteredComments.length > 0 &&
        Date.now() - new Date(channelData.updatedAt) > 86400000 * 7
    ) {
        return res
            .status(200)
            .json(
                new APIResponse(
                    200,
                    channelData.filteredComments,
                    "Comments fetched successfully"
                )
            );
    }
    const videoIds = [
        ...channelData.recentVideos.slice(0, 3),
        ...channelData.bestVideos.slice(0, 3),
    ];
    const comments = await extractComments(videoIds);
    const filteredCommentIds = await filterBestComments(comments);
    channelData.filteredComments = comments.filter((comment) =>
        filteredCommentIds.includes(comment.commentId)
    );
    await channelData.save();
    return res
        .status(200)
        .json(new APIResponse(200, comments, "Comments fetched successfully"));
});

export { getBestComments };
