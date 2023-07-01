const express = require("express");
const { createPost } = require("../controllers/post.controller");
const { createCommunity } = require("../controllers/community.contoller");
const { createComment } = require("../controllers/comment.controller");
const {
  updateUserDetails,
  getUserDetails,
} = require("../controllers/user.controller");

const router = express.Router();

router.put("/users/update", updateUserDetails);
router.post("/posts/create", createPost);
router.post("/comments/create", createComment);
router.post("/communities/create", createCommunity);
router.get("/users/by-id", getUserDetails);

module.exports = router;
