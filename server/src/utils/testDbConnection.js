const { Sequelize } = require("sequelize");
const config = require("../../sequelize/config/config");

const testDatabaseConnection = async () => {
  const sequelize = new Sequelize(config.development);

  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { testDatabaseConnection };