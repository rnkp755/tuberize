import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { Blog } from "../models/blog.model.js";

const addBlog = asyncHandler(async (req, res) => {
    const { channelId, title, content } = req.body;
    if (!channelId || !title || !content) {
        throw new APIError(400, "Channel ID, title and content are required");
    }
    const blog = new Blog({ channelId, title, content });
    await blog.save();
    return res
        .status(201)
        .json(new APIResponse(201, { blog }, "Blog added successfully"));
});

const getBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
    if (!blogId || blogId.trim() === "") {
        throw new APIError(400, "Blog ID is required");
    }
    const blog = await Blog.findById(blogId);
    if (!blog) {
        throw new APIError(404, "Blog not found");
    }
    return res
        .status(200)
        .json(new APIResponse(200, { blog }, "Blog fetched successfully"));
});

const getBlogs = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    if (!channelId || channelId.trim() === "") {
        throw new APIError(400, "Channel ID is required");
    }
    const { page = 1, limit = 10, query, sortBy, sortType } = req.query;
    if (isNaN(page) || isNaN(limit)) {
        throw new APIError(400, "Invalid page or limit parameters");
    }
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { [sortBy || "createdAt"]: sortType || "desc" },
        select: "-__v -createdAt -updatedAt",
    };
    const queryOptions = {};
    if (query) {
        queryOptions.name = { $regex: query, $options: "i" };
    }
    const blogs = await Blog.aggregatePaginate(
        Blog.aggregate([{ $match: { channelId, ...queryOptions } }]),
        options
    );
    return res
        .status(200)
        .json(new APIResponse(200, { blogs }, "Blogs fetched successfully"));
});

const updateBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
    const { channelId, title, content } = req.body;
    if (!blogId || !title || !content) {
        throw new APIError(400, "Blog ID, title and content are required");
    }
    const blog = await Blog.findById(blogId);
    if (!blog || !blog.channelId === channelId) {
        throw new APIError(404, "Unauthorized access");
    }
    const updated = await Blog.findByIdAndUpdate(blogId, { title, content });
    if (!updated) {
        throw new APIError(500, "Failed to update blog in database");
    }
    return res
        .status(200)
        .json(new APIResponse(200, updated, "Blog updated successfully"));
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
    const { channelId } = req.body;
    if (!blogId || blogId.trim() === "") {
        throw new APIError(400, "Blog ID is required");
    }
    const blog = await Blog.findById(blogId);
    if (!blog || !blog.channelId === channelId) {
        throw new APIError(404, "Unauthorized access");
    }
    const deleted = await Blog.findByIdAndDelete(blogId);
    if (!deleted) {
        throw new APIError(500, "Failed to delete blog from database");
    }
    return res
        .status(200)
        .json(new APIResponse(200, {}, "Blog deleted successfully"));
});

export { addBlog, getBlog, getBlogs, updateBlog, deleteBlog };
