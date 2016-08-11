'use strict';

const mysql = require('promise-mysql');

module.exports = mysql.createPool({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});
