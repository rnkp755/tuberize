import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    channelId: {
        type: String,
        required: true,
        trim: true,
    },
});

export const User = mongoose.model("User", userSchema);
