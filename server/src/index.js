const { Sequelize } = require('sequelize');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const postRoutes = require('./routes/post.route');

const sequelize = new Sequelize('ozone_dev', 'root', 'FexBtfbjCgtXxpjvdcTW', {
  host: 'containers-us-west-178.railway.app',
  port: 7427,
  dialect: 'mysql'
});

app.use(express.json());
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello World! Hello Eperibodi');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
