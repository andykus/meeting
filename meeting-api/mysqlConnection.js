'use strict';

const mysql = require('promise-mysql');

module.exports = mysql.createPool({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'scruffy',
  connectionLimit: 10
});