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

router.get("/posts/by-id", getPostById);
router.get("/posts/by-popularity", getPostByPopularity);
router.get("/posts/by-tag", getPostsByTag);

module.exports = router;
