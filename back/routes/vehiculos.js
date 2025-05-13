const express = require('express');
const router = express.Router();
const db = require('../modelo/connection.js');





// Mostrar todos los vehículos
router.get('/vehiculos', (req, res) => {
  db.query('SELECT * FROM vehiculos', (err, results) => {
    if (err) throw err;
    res.render('vehiculos', { vehiculos: results });
  });
});

// Crear un nuevo vehículo
router.post('/vehiculos', (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body;
  db.query(
    'INSERT INTO vehiculos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)',
    [nombre, descripcion, precio, imagen],
    (err) => {
      if (err) throw err;
      res.redirect('/vehiculos');
    }
  );
});

// Eliminar vehículo
router.post('/vehiculos/eliminar/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM vehiculos WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/vehiculos');
  });
});

// Editar vehículo
router.post('/vehiculos/editar/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, precio, imagen } = req.body;
  db.query(
    'UPDATE vehiculos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id = ?',
    [nombre, descripcion, precio, imagen, id],
    (err) => {
      if (err) throw err;
      res.redirect('/vehiculos');
    }
  );
});

module.exports = router;