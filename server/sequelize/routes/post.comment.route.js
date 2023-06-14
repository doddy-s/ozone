const express = require('express');
const router = express.Router();
const postC = require('../models/post');

router.get('/post.comment.route', async (req, res) => {
  try {
    const postCs = await postC.findAll({ include: 'comments' });
    res.json(postCs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

module.exports = router;
