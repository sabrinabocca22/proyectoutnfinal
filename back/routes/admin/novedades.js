var express = require('express');
var router = express.Router();
var pool = require('../../modelo/bd');
var novedadesModelo = require('../../modelo/novedadesModelo'); 

var util = require ('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req, res, next) {
  try {
    const productos = await pool.query('SELECT * FROM productos');

    // Agregamos imagen de Cloudinary si hay img_id
    const productosConImagen = productos.map(producto => {
      if (producto.img_id) {
        const imagen = cloudinary.image(producto.img_id, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        return {
          ...producto,
          imagen
        };
      } else {
        return {
          ...producto,
          imagen: ''
        };
      }
    });

    res.render('admin/novedades', {
      layout: 'admin/layout',
      productos: productosConImagen,
      nombre: req.session.nombre
    });

  } catch (error) {
    console.log(error);
    res.render('admin/novedades', {
      layout: 'admin/layout',
      error: true,
      mensaje: 'Error al cargar los productos'
    });
  }
});


// Mostrar formulario para agregar novedad
router.get('/nuevo', function(req, res, next) {
  res.render('admin/nuevo', {
    layout: 'admin/layout'
  });
});

// Procesar formulario para agregar novedad
router.post('/nuevo', async (req, res, next) => {
  try {
    let img_id = '';

    // Revisión de archivos cargados
    if (req.files && req.files.imagen) {
      let imagen = req.files.imagen;
      console.log('Imagen recibida:', imagen); // 👈 Ver esto en consola

      const resultado = await uploader(imagen.tempFilePath);
      img_id = resultado.public_id;
      console.log('Imagen subida a Cloudinary con ID:', img_id);
    }

    const { nombre, descripcion, precio } = req.body;

    if (nombre && descripcion && precio) {
      await novedadesModelo.insertNovedad({
        nombre,
        descripcion,
        precio,
        img_id
      });

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log('Error en /nuevo:', error);
    res.render('admin/nuevo', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la novedad'
    });
  }
});


router.get('/eliminar/:id', async(req, res, next) => { 
  var id = req.params.id;

  let novedad = await novedadesModelo.getnovedadById(id);
if (novedad.img_id) {
  await (destroy(novedad.img_id));
}
  await novedadesModelo.deletenovedadesById(id);
  res.redirect('/admin/novedades');

   });


   router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id);
    var novedad = await novedadesModelo.getnovedadById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});


router.post('/modificar', async (req, res, next) => {
    try {
      let img_id = req.body.img_original;
let borrar_img_vieja = false;

if (req.body.img_delete === "1") {
  img_id = null;
  borrar_img_vieja = true;
} else {
  if (req.files && Object.keys(req.files).length > 0) {
    imagen = req.files.imagen;
    img_id = (await uploader(imagen.tempFilePath)).public_id;
    borrar_img_vieja = true;
  }
}

if (borrar_img_vieja && req.body.img_original) {
  await (destroy(req.body.img_original));
}
        var obj = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img_id
        }

        console.log(obj)

        await novedadesModelo.modificarnovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        })
    }
});





module.exports = router;