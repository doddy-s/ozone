const { Sequelize, Transaction } = require("sequelize");
const { Comment } = require("../../sequelize/models");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];

const createComment = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { content, userId, postId } = req.body;

    const newComment = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Comment.create(
          {
            content: content,
            userId: userId,
            postId: postId,
          },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "Comment has been successfully created",
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

module.exports = { createComment };
