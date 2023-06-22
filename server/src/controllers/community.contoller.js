const { Sequelize, Transaction } = require("sequelize");
const { Community } = require("../../sequelize/models");
const dbConfig = require("../../sequelize/config/config")[process.env.NODE_ENV || "development"];

const createCommunity = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { name, description } = req.body;

    const newCommunity = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Community.create(
          {
            name: name,
            description: description,
          },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "Community has been successfully created",
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

module.exports = { createCommunity };
