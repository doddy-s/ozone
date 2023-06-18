const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const port = 3000;
const postRoutes = require("./routes/post.route");
const publicRoutes = require("./routes/public.route");

const sequelize = new Sequelize("ozone_dev", "root", "FexBtfbjCgtXxpjvdcTW", {
  host: "containers-us-west-178.railway.app",
  port: 7427,
  dialect: "mysql",
});

app.use(express.json());

app.use("/", publicRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World! Hello Eperibodi");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDatabaseConnection();

sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
  console.log('// Tables in database','==========================');
  console.log(tableObj);
})
.catch((err) => {
  console.log('showAllSchemas ERROR',err);
})

// // Check koneksi db
// const express = require('express');
// const mysql = require('mysql2');

// const app = express();

// // Create a connection pool
// const pool = mysql.createPool({
//   host: 'containers-us-west-178.railway.app:7427', // Update with your database host
//   user: 'root', // Update with your database username
//   password: 'FexBtfbjCgtXxpjvdcTW', // Update with your database password
//   database: 'ozone_dev' // Update with your database name
// });

// // Test route to check the database connection
// app.get('/test-connection', (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error connecting to database:', err);
//       res.status(500).send('Error connecting to database');
//     } else {
//       console.log('Connected to database!');
//       connection.release();
//       res.send('Connected to database!');
//     }
//   });
// });

// // Start the server
// app.listen(7427, () => {
//   console.log('Server started on port 7427');
// });
