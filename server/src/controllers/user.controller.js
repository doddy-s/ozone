const { Sequelize, Transaction } = require("sequelize");
const config = require("../../sequelize/config/config");
const { User } = require("../../sequelize/models");

const updateUserDetails = async (req, res) => {
  const sequelize = new Sequelize(config.development);

  try {
    const { userId, name, gender, bio } = req.body;

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

module.exports = { updateUserDetails };

//const getProfile

//const getSales