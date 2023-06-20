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

module.exports = router;