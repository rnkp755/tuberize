import { Router } from "express";
import {
    getChannelId,
    getChannelDetails,
} from "../controllers/channel.controller.js";
import { getBestComments } from "../controllers/comment.controller.js";
import { getVideos, getVideoStats } from "../controllers/video.controller.js";
import { addUser } from "../controllers/user.controller.js";
import { sendMail } from "../controllers/contact.controller.js";

const router = Router();

router.route("/channelId/:channelUsername").get(getChannelId);
router.route("/channelDetails/:channelId").get(getChannelDetails);

router.route("/videos/:channelId").get(getVideos);
router.route("/videoStats/:videoIds").get(getVideoStats);

router.route("/bestComments/:channelId").get(getBestComments);

router.route("/addUser").post(addUser);

router.route("/mail").post(sendMail);

export default router;
