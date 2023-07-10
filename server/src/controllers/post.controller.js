const { Sequelize, Transaction, Op } = require("sequelize");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];
const { Post, User, Member, Community } = require("../../sequelize/models");
const moment = require("moment");

const getPostByPopularity = async (req, res) => {
  try {
    const posts = await Post.findAll(
      {
        order: [["created_at", "DESC"]],
        include: [
          { model: Community, attributes: ["communityId", "name", "media"] },
          { model: User, attributes: ["userId", "name", "media"] },
        ],
      },
      { raw: true }
    );

    posts.forEach((post) => {
      post.dataValues.createdAt = moment(post.dataValues.createdAt).fromNow();
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

const getPostsByCommunity = async (req, res) => {
  try {
    const { communityId } = req.query;

    const posts = await Post.findAll({
      where: {
        communityId: communityId,
      },
      include: [{ model: User, attributes: ["userId", "name"] }],
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
      message: error.message || "No posts found for the specified community",
    };

    //console.log(response);

    return res.status(response.code).json(response);
  }
};

const getPostByUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const posts = await Post.findAll({
      where: {
        userId: userId,
      },
      include: [{ model: Community, attributes: ["communityId", "name"] }],
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
      message: error.message || "No posts found for the specified user",
    };

    return res.status(response.code).json(response);
  }
};

const getPostByJoinedCommunity = async (req, res) => {
  try {
    const { userId } = req;

    const communities = await Member.findAll({
      where: {
        userId: userId,
      },
    });

    const communityIds = communities.map((community) => community.communityId);

    const posts = await Post.findAll({
      where: {
        communityId: {
          [Op.in]: communityIds,
        },
      },
      include: [
        { model: Community, attributes: ["communityId", "name", "media"] },
        { model: User, attributes: ["userId", "name", "media"] },
      ],
      order: [["created_at", "DESC"]],
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
      message: error.message || "No posts found for the specified user",
    };

    return res.status(response.code).json(response);
  }
};

const getPostsByTag = async (req, res) => {
  try {
    const { tag } = req.query;

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
  const sequelize = new Sequelize(dbConfig);

  try {
    const { userId } = req;
    const { tag, content, media, communityId } = req.body;

    // create new user
    const newAccount = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Post.create(
          {
            tag: tag,
            content: content,
            media: media,
            userId: userId,
            communityId: communityId,
          },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "Post has been successfully created",
    };

    return res.status(201).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

const getPostById = async (req, res) => {
  try {
    const { postId } = req.query;

    //console.log(req.query);

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
  getPostsByCommunity,
  getPostByUser,
  getPostByJoinedCommunity,
  getPostsByTag,
  createPost,
  getPostById,
};
