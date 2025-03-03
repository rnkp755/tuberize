import { Router } from "express";
import {
    addBlog,
    getBlog,
    getBlogs,
    updateBlog,
    deleteBlog,
} from "../controllers/blog.controller.js";

const blogRouter = Router();

blogRouter.route("/post").post(addBlog);
blogRouter.route("/:blogId").get(getBlog);
blogRouter.route("/getAll/:channelId").get(getBlogs);
blogRouter.route("/update/:blogId").patch(updateBlog);
blogRouter.route("/delete/:blogId").delete(deleteBlog);

export default blogRouter;
