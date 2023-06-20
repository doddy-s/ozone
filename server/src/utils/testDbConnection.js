const { Sequelize } = require("sequelize");
const config = require("../../sequelize/config/config");

async function testDatabaseConnection() {
  const sequelize = new Sequelize(config.development);

  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
