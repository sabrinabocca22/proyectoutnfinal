// modelo/connection.js
const mysql = require('mysql2/promise');

// Crear la conexión utilizando mysql2 con promesas
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',           // Cambia si usas otro usuario
  password: '',           // Cambia si tu contraseña no está vacía
  database: 'transportes' // Usa el nombre de tu base de datos
});

// No es necesario llamar a db.connect(), ya que createPool maneja la conexión automáticamente.

module.exports = db;

