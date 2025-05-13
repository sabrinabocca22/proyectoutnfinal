var express = require('express');
var router = express.Router();
var usuariosModelo = require('../../modelo/usuariosmodelo');

/* Mostrar formulario de login */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get ('/logout', function (req,res,next){ 
  req.session.destroy (); //destruye las variables de session (id y usuario)
  res.render('admin/login' , {
    layout: 'admin/layout'

     });
    });


/* Procesar login */
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModelo.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario =data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades'); // Asegurate de tener esta ruta creada
    } else {
      // Login incorrecto: mostrar error
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/login', {
      layout: 'admin/layout',
      error: true
    });
  }
});

module.exports = router;

