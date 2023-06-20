const express = require('express');
const sequelize = require('sequelize');
const post = require('../../sequelize/models/post');

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
});

module.exports = router;
