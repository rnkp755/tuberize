import { Router } from "express";
import {
    getChannelId,
    getChannelDetails,
} from "../controllers/channel.controller.js";
import { getBestComments } from "../controllers/comment.controller.js";
import { getVideos, getVideoStats } from "../controllers/video.controller.js";

const router = Router();

router.route("/channelId/:channelUsername").get(getChannelId);
router.route("/channelDetails/:channelId").get(getChannelDetails);

router.route("/videos/:channelId").get(getVideos);
router.route("/videoStats/:videoIds").get(getVideoStats);

router.route("/bestComments/:channelId").get(getBestComments);

export default router;
