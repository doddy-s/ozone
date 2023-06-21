const express = require("express");
const { createPost } = require("../controllers/post.controller");
const { createCommunity } = require("../controllers/community.contoller");
const { createComment } = require("../controllers/comment.controller");

const router = express.Router();

router.post("/posts/create", createPost);
router.post("/comments/create", createComment);
router.post("/communities/create", createCommunity);

module.exports = router;
