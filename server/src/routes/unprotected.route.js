const express = require("express");
const { signup, signin, signout, authImageKit } = require("../controllers/auth.controller");
const {
  getPostByPopularity,
  getPostsByTag,
  getPostById,
} = require("../controllers/post.controller");

const { getCommunities, getCommunityById } = require("../controllers/community.contoller");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/imagekit", authImageKit);


router.get("/posts/by-id", getPostById);
router.get("/posts/by-popularity", getPostByPopularity);
router.get("/posts/by-tag", getPostsByTag);

router.get("/communities/by-member-count", getCommunities);
router.get("/communities/by-id/:communityId", getCommunityById);

module.exports = router;
