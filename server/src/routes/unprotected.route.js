const express = require("express");
const { signup, signin } = require("../controllers/auth.controller");
const {
  getPostByPopularity,
  getPostsByTag,
  getPostById,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/posts/popular", getPostByPopularity);
router.get("/posts/tag/:tag", getPostsByTag);
router.get("/posts/:postId", getPostById);

module.exports = router;
