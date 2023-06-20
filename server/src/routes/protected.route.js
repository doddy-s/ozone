const express = require("express");
const { createPost } = require("../controllers/post.controller");

const router = express.Router();

router.post("/createPost", createPost);

module.exports = router;
