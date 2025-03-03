import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";

const addUser = asyncHandler(async (req, res) => {
    const { email, channelId } = req.body;
    if (!email || !channelId) {
        throw new APIError(400, "Email and Channel ID are required");
    }
    const user = new User({ email, channelId });
    await user.save();
    return res
        .status(201)
        .json(new APIResponse(201, { user }, "User added successfully"));
});

export { addUser };
