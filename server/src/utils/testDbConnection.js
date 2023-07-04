const { Sequelize } = require("sequelize");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];

const testDatabaseConnection = async () => {
  const sequelize = new Sequelize(dbConfig);
  //console.log(dbConfig);

  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testDatabaseConnection };
