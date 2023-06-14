const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const postRoutes = require('./routes/post.route');

app.use(express.json());
app.use('/api', postRoutes);
