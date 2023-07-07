const express = require("express");
const {
  createPost,
  getPostByJoinedCommunity,
} = require("../controllers/post.controller");
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
router.get("/posts/by-joined-communities", getPostByJoinedCommunity);

router.post("/comments/create", createComment);

router.post("/communities/create", createCommunity);
router.get("/communities/join/:communityId", joinCommunity);
router.get("/communities/joined", getJoinedCommunities);

module.exports = router;
