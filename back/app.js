var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

require('dotenv').config();
var session = require('express-session');
var fileUpload = require('express-fileupload');

const vehiculosRouter = require('./routes/vehiculos');
const nodemailer = require('nodemailer');


var pool = require('./modelo/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require ('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de sesiones (eliminada la duplicada)
app.use(session({
  secret: 'PW2021awqyeudj',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

// Middleware para rutas protegidas
secured = async (req, res, next) => { 
  try { 
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) { 
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
};

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
 }));


// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter); 
app.use('/api', cors(), apiRouter);

// Select
pool.query('select nombre from productos').then(function(resultados) {
  console.log(resultados);
});

app.use('/', vehiculosRouter);

app.get('/', function(req, res) {
  var conocido = Boolean(req.session.nombre);
  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar', function(req, res) {
  if (req.body.nombre) { 
    req.session.nombre = req.body.nombre;
  }
  res.redirect('/');
});

// Mostrar formulario de contacto
app.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contacto' });
});

// Procesar envío de correo
app.post('/enviar-correo', async function(req, res) {
  const { nombre, email, mensaje } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tucorreo@gmail.com', // Usa una variable de entorno en producción
      pass: 'tu_contraseña_o_token' // Usa una variable de entorno en producción
    }
  });

  let mailOptions = {
    from: email,
    to: 'destino@empresa.com',
    subject: `Mensaje de ${nombre}`,
    text: mensaje
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Correo enviado correctamente.');
  } catch (error) {
    console.error(error);
    res.send('Error al enviar el correo.');
  }
});



// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;