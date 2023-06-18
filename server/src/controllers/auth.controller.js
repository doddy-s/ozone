const { Sequelize, Transaction } = require("sequelize");
const { Account, User } = require("../../sequelize/models");

const signup = async (req, res) => {
  const sequelize = new Sequelize("ozone_dev", "root", "FexBtfbjCgtXxpjvdcTW", {
    host: "containers-us-west-178.railway.app",
    port: 7427,
    dialect: "mysql",
  });

  try {
    const { username, email, password } = req.body;

    // create new user
    const newAccount = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Account.create(
          {
            username: username,
            email,
            password: password,
            User: {
              name: username,
            },
          },
          { transaction: t, include: User }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "User has been successfully created",
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

module.exports = { signup };
