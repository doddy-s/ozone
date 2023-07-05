require("dotenv").config();

module.exports = {
  development: {
    username: "ozone_devs",
    password: "toor",
    database: "ozone_second",
    host: "miko.southeastasia.cloudapp.azure.com",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOSTNAME,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.HOSTNAME,
    dialect: process.env.DB_DIALECT,
  },
};
