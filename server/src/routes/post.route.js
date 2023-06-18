const express = require('express');
const Sequelize = require('sequelize');
const post = require('../../sequelize/models/post');
const sequelize = new Sequelize('ozone_dev', 'root', 'FexBtfbjCgtXxpjvdcTW', {
  host: 'containers-us-west-178.railway.app',
  port: 7427,
  dialect: 'mysql'
});

const router = express.Router();

router.get('/getposts', async (req, res) => {
  try {
    const posts = await post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

router.post('/postposts', async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { tag, content, media, userId} = req.body;
    console.log(tag, content, media, userId)
    const newPost = await post.create(
      {tag, content, media, userId},
      {transaction}
    );
    await transaction.commit();
    res.status(201).json(newPost);
  } catch (error) {
    await transaction.rollback();
    res.status(500).json( {error} );
  }
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
});

module.exports = router;