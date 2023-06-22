const { Sequelize, Transaction, json } = require("sequelize");
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
const getProfile = async (req, res) => {
  const sequelize = new sequelize(config.development);

  try {
    const {userId} = req.body;

    const user = await User.findOne({where: {userId}});

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
  } finally{
    await sequelize.close();
  }

};

module.exports = {updateUserDetails, getProfile};

//const getSales

const getSales = async (req, res) => {
  const sequelize = new sequelize(config.development);

  try {
    const seles = await Sale.findAll();

    const response = {
      code: 200,
      status: "success",
      data: seles,
    };

    return res.status(200),json(response);
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

module.exports = { updateUserDetails, getProfile, getSales };