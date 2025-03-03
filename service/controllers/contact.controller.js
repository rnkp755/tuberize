import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import nodemailer from "nodemailer";
import { User } from "../models/user.model.js";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const beautifyMessage = (message) => {
    return `
    <h1 style="color: #333; font-size: 24px;">New Message</h1>
    <p style="color: #333; font-size: 16px;">${message}</p>
    `;
};

const sendMail = asyncHandler(async (req, res) => {
    const { name, email, purpose, message, channelId } = req.body;
    if (
        !name ||
        name.trim() === "" ||
        !email ||
        email.trim() === "" ||
        !purpose ||
        purpose.trim() === "" ||
        !message ||
        message.trim() === "" ||
        !channelId ||
        channelId.trim() === ""
    ) {
        throw new APIError(400, "All fields are required");
    }

    const user = await User.findOne({ channelId });
    if (!user) {
        throw new APIError(404, "User not found");
    }

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: purpose,
        html: beautifyMessage(message + "\n\nContacted By: " + email),
    });

    return res
        .status(200)
        .json(new APIResponse(200, null, "Message sent successfully"));
});

export { sendMail };
