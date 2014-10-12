// Dependencias
var express     = require('express');
var mongoose    = require('mongoose');

// Configuraciones
var db = require('./config/db');

// Connect to the DB
mongoose.connect(db.url);

// Servidor Express
var app     = express();
var port    = process.env.PORT || 3000;

// Configuración App
app.configure(function() {
    // Zona pública
    app.use(express.static(__dirname + '/public'));

    // Logs de las peticiones en consola
    app.use(express.logger('dev'));

    // Parseo de respuestas HTTP
    app.use(express.json());
    app.use(express.urlencoded());

});

// Express Routes
require('./app/routes/api')(app);
require('./app/routes/routes')(app);

// Iniciamos servidor en puerto 3000
app.listen(port);
