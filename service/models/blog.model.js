import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const blogScehma = new Schema(
    {
        channelId: {
            type: String,
            required: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
blogScehma.plugin(mongooseAggregatePaginate);
export const Blog = mongoose.model("Blog", blogScehma);
