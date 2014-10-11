// Dependencias
var express = require('express');
var mongoose = require('mongoose');

// Configuraciones
var db = require('./config/db');


// Servidor Express
var app = express();
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

// Iniciamos servidor en puerto 3000
app.listen(3000);
