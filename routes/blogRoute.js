const express = require("express");
const {
  createBlog,
  getAllBlog,
  getABlog,
} = require("../controller/blogCtrl.js");
const router = express.Router();

router.post("/", createBlog);
router.get("/:id", getABlog);
router.get("/", getAllBlog);
module.exports = router;
