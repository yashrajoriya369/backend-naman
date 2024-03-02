const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

//Create a Blog
const createBlog = asyncHandler(async (req, res) => {
  const title = req.body.title;
  const findBlog = await Blog.findOne({ title: title });
  if (!findBlog) {
    // Create a New Blog
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } else {
    throw new Error("Blog Already Exists");
  }
});

// Get all Blogs
const getAllBlog = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Blog
const getABlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id);
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createBlog, getAllBlog, getABlog };
