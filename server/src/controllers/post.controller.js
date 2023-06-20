const { Post } = require("../../sequelize/models");

/**
 * Get posts by popularity
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getPostByPopularity = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [["up", "DESC"]],
    });

    if (posts.length === 0) {
      throw new Error("No posts found");
    }

    const response = {
      code: 200,
      status: "Ok",
      data: posts,
    };
    return res.status(200).json(response);
  } catch (error) {
    const response = {
      code: 404,
      status: "Not Found",
      message: error.message || "No posts found",
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
        tag: tag,
      },
    });

    const response = {
      code: 200,
      status: "Ok",
      data: posts,
    };
    return res.status(200).json(response);
  } catch (error) {
    const response = {
      code: 404,
      status: "Not Found",
      message: error.message || "No posts found for the specified tag",
    };

    console.log(response);

    return res.status(response.code).json(response);
  }
};

const createPost = async (req, res) => {
  try {
    const { tag, content, media, userId, communityId } = req.body;

    const post = await Post.create({
      tag: tag,
      content: content,
      media: media,
      userId: userId,
      communityId: communityId,
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getPostByPopularity,
  getPostsByTag,
  createPost,
  getPostById,
};
