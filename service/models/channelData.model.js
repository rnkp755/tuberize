import mongoose, { Schema } from "mongoose";

const channelDataSchema = new Schema(
    {
        channelId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        recentVideos: [
            {
                type: String,
                required: true,
            },
        ],
        bestVideos: [
            {
                type: String,
                required: true,
            },
        ],
        filteredComments: [
            {
                commentId: {
                    type: String,
                    required: true,
                },
                textOriginal: {
                    type: String,
                    required: true,
                    trim: true,
                },
                authorDisplayName: {
                    type: String,
                    required: true,
                    trim: true,
                },
                authorProfileImageUrl: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],
    },
    { timestamps: true }
);

export const ChannelData = mongoose.model("ChannelData", channelDataSchema);
