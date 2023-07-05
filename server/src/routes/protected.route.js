const express = require("express");
const { createPost } = require("../controllers/post.controller");
const {
  createCommunity,
  joinCommunity,
  getJoinedCommunities,
} = require("../controllers/community.contoller");
const { createComment } = require("../controllers/comment.controller");
const {
  updateUserDetails,
  getUserDetails,
} = require("../controllers/user.controller");

const router = express.Router();

router.put("/users/update", updateUserDetails);
router.get("/users/by-id", getUserDetails);

router.post("/posts/create", createPost);
router.post("/comments/create", createComment);

router.post("/communities/create", createCommunity);
router.post("/communities/join", joinCommunity);
router.get("/communities/joined", getJoinedCommunities);

module.exports = router;
