const express = require('express');
const post = require('../../sequelize/models/post');

const router = express.Router();

router.get('/getposts.route', async (req, res) => {
  try {
    const posts = await post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

router.post('/postposts.route', async (req, res) => {
    try {
      const { tag, content, media, userId} = req.body;
      console.log(tag, content, media, userId)
      const newpost = await post.create({tag, content, media, userId});
      res.status(201).json(newpost);
    } catch (error) {
      res.status(500).json( {error} );
    }
  });

module.exports = router;
