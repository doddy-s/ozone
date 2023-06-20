const express = require('express');
const { Sequelize } = require('sequelize');
const { Post } = require('../../sequelize/models');

const router = express.Router();
const sequelize = new Sequelize(config.development);

/**
 * Get posts by popularity
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getPostByPopularity = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['up', 'DESC']],
    });

    if (posts.length === 0) {
      throw new Error('No posts found');
    }

    const response = {
      code: 200,
      status: 'Ok',
      data: posts
    };
    return res.status(200).json(response);
  } catch (error) {
    const response = {
      code: 404,
      status: 'Not Found',
      message: error.message || 'No posts found'
    };

    console.log(response);

    return res.status(response.code).json(response);
  }
};

/**
 * Get posts by tag
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getPostsByTag = async (req, res) => {
  try {
    const { tag } = req.params;

    const posts = await Post.findAll({
      where: {
        tag: tag
      }
    });

    const response = {
      code: 200,
      status: 'Ok',
      data: posts
    };
    return res.status(200).json(response);
  } catch (error) {
    const response = {
      code: 404,
      status: 'Not Found',
      message: error.message || 'No posts found for the specified tag'
    };

    console.log(response);

    return res.status(response.code).json(response);
  }
};

router.get('/posts/popular', getPostByPopularity);
router.get('/posts/tag/:tag', getPostsByTag);

module.exports = router;
