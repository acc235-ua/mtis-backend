// utils/db.js
'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       // o la IP del servidor MySQL
  user: 'root',
  password: 'contrasenamysql2025', //Cambiar contraseña
  port: 3307,             // Puerto por defecto de MySQL
  database: 'mtis-grupal'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL como ID ' + connection.threadId);
});

module.exports = connection;
