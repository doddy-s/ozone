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

  router.get('/posts.popular', async (req, res) => {
    try {
      const sortedPosts = await post.findAll({
        order: [['up', 'DESC']]
      });
      res.json(sortedPosts);
    } catch (error) {
      console.error('Error retrieving popular posts:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/posts.tag', async (req, res) => {
    try {
      const { tag } = req.params;
  
      const posts = await post.findAll({
        where: {
          tag: tag
        }
      });
  
      res.json(posts);
    } catch (error) {
      console.error('Error retrieving posts by tag:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
