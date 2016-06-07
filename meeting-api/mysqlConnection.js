'use strict';

const mysql = require('promise-mysql');

module.exports = mysql.createPool({
  host: '127.0.0.1',
  user: '',
  password: '',
  database: '',
  connectionLimit: 10
});