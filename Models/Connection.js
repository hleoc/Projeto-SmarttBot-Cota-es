const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });
const env = process.env.NODE_ENV || 'development';

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: env !== 'development' ? 'smarttBot': 'smarttBot2',
};

const connection = mysql.createPool(config);

module.exports = connection;
