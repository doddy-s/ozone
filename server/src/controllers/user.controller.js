const { Sequelize, Transaction, json } = require("sequelize");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];
const { User, Account } = require("../../sequelize/models");

const updateUserDetails = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { userId } = req;
    const { name, gender, bio } = req.body;

    const updatedUser = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await User.update(
          {
            name: name,
            gender: gender,
            bio: bio,
          },
          { where: { userId: userId } },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 200,
      status: "Ok",
      message: "User has been successfully updated",
    };

    return res.status(200).json(response);
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

const getUserDetails = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { userId } = req;

    const user = await User.findOne({
      attributes: ["name", "gender", "bio", "media"],
      where: { userId },
      include: {
        model: Account,
        attributes: ["username", "email"],
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const response = {
      code: 200,
      status: "success",
      data: user,
    };

    return res.status(200).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "error";

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

const getSales = async (req, res) => {
  const sequelize = new sequelize(db);

  try {
    const seles = await Sale.findAll();

    const response = {
      code: 200,
      status: "success",
      data: seles,
    };

    return res.status(200), json(response);
  } catch (error) {
    error.code = 500;
    error.status = "error";

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

module.exports = { updateUserDetails, getUserDetails, getSales };
