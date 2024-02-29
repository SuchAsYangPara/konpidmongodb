const mysql = require('mysql');

let connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'vacCenter',
});

module.exports = connection;
