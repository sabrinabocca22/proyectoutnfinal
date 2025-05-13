var pool = require('./bd');

async function getproductos() {
  var query = 'select * from productos';
  var rows = await pool.query(query);
  return rows;
}

// Reemplaza la función insertNovedad anterior con esta versión actualizada
async function insertNovedad(body) {
  try {
    var objParaInsertar = {
      nombre: body.nombre,
      descripcion: body.descripcion,
      precio: body.precio,
      img_id: body.img_id // Agrega img_id al objeto
    };
    var query = "insert into productos set ?";
    var rows = await pool.query(query, [objParaInsertar]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletenovedadesById(id) { 
  var query = 'delete from productos where id = ?';
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getnovedadById(id) {
  var query = 'select * from productos where id = ?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarnovedadById(obj, id) {
  try {
    var query = 'UPDATE productos SET ? WHERE id = ?';
    console.log('Consulta SQL:', query);
    console.log('Datos a actualizar:', obj, 'ID:', id);

    var rows = await pool.query(query, [obj, id]);
    
    console.log('Filas afectadas:', rows.affectedRows);

    if (rows.affectedRows === 0) {
      throw new Error('No se encontró un producto con ese ID');
    }

    return rows;
  } catch (error) {
    console.log('Error al ejecutar la consulta:', error);
    throw error;
  }
}

module.exports = { getproductos, insertNovedad, deletenovedadesById, getnovedadById, modificarnovedadById };