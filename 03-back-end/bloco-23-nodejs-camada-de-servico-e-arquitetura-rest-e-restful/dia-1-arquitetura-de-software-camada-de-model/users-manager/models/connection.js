const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.BD_USER,
  password: process.env.DB_PASSWORD,
  database: 'users_crud',
});

module.exports = connection;
