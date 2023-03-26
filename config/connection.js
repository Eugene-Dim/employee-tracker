const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const dialect = 'mysql';
const host = '127.0.0.1';
const port = 3306;
const url = `mysql://${DB_USER}:${DB_PASSWORD}@${host}:${port}/${DB_NAME}`;

const sequelize = new Sequelize(url);


module.exports = sequelize;

