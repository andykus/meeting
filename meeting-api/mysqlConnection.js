'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '',
	user: '',
	password: '',
	database: ''
});

connection.connect(error => {
	if(error) {
		throw error;
	}
});

module.exports = connection;
