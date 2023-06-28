const { Sequelize, Transaction } = require("sequelize");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];
const { Account, User } = require("../../sequelize/models");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

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

const signin = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { username, password } = req.body;

    const account = await Account.findOne({
      where: {
        username: username,
      },
      include: User,
    });

    if (!account) {
      const error = new Error("Account not found");
      error.code = 404;
      error.status = "Not Found";

      const response = {
        code: error.code,
        status: error.status,
        message: error.message,
      };

      return res.status(response.code).json(response);
    }

    const isPasswordValid = () => {
      return password === account.password ? true : false;
    };

    if (!isPasswordValid()) {
      const error = new Error("Invalid password");
      error.code = 401;
      error.status = "Unauthorized";

      const response = {
        code: error.code,
        status: error.status,
        message: error.message,
      };

      return res.status(response.code).json(response);
    }

    console.log(account);

    const token = await jwt.sign(
      { payload: { userId: account.User.userId } },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.cookie("token", token, {
      maxAge: process.env.JWT_COOKIE_EXPIRES_IN,
      sameSite: "none",
      secure: true,
    });

    const response = {
      code: 200,
      status: "OK",
      message: "User has been successfully logged in",
    };

    return res.status(response.code).json(response);
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

const signout = async (req, res) => {
  try {
    const token = null;

    res.cookie("token", token, {
      maxAge: process.env.JWT_COOKIE_EXPIRES_IN,
      sameSite: "none",
      secure: true,
    });

    const response = {
      code: 200,
      status: "OK",
      message: "User has been successfully signed out",
    };

    return res.status(response.code).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }
};

module.exports = { signup, signin, signout };
