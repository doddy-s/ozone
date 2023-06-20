const express = require('express');
const { signup } = require('../controllers/auth.controller');

const routes = express.Router();

routes.post('/signup', signup);
module.exports = routes;