var express = require('express');
var router = express.Router();
var novedadesModelo = require('./../modelo/novedadesModelo');
var cloudinary = require('cloudinary').v2;

var nodemailer = require ('nodemailer');

router.get('/novedades', async function(req, res, next) {
  try {
    // Obtener productos a través del modelo
    let novedades = await novedadesModelo.getproductos();

    // Mapear cada producto para agregar la imagen desde Cloudinary
    novedades = novedades.map(producto => {
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
          imagen: ''  // Si no tiene imagen, devolver un string vacío
        };
      }
    });

    // Responder con la lista de productos con imagenes
    res.json(novedades);

  } catch (error) {
    console.error('Error al obtener novedades:', error);
    res.status(500).send('Hubo un error al obtener las novedades');
  }
});


router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'sabrina_bocca@gmail.com',
    subject: 'Contacto web',
    html: `${req.body.nombre} se contacto a traves de
    la web y quiere más información a este correo:
    ${req.body.email} <br> Además, hizo el siguiente
    comentario: ${req.body.mensaje} <br> Su tel es:
    ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); // cierra transp

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});



module.exports = router;
