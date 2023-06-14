const express = require('express');
const router = express.Router();
const post = require('../../sequelize/models/post');

router.get('/posts.route', async (req, res) => {
  try {
    const posts = await post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

router.post('/posts.route', async (req, res) => {
    try {
      const { postId, tag, content, media, createdAt, updatedAt } = req.body;
      const newpost = await post.create({ postId, tag, content, media, createdAt, updatedAt });
      res.status(201).json(newpost);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create a user' });
    }
  });

module.exports = router;
