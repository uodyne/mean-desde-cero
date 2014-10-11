// Módulo de la API (JSON)
module.exports = function(app) {
    var mongoose = require('mongoose'),
        // Cargamos el modelo que creamos en el punto anterior
        Model = require('../models/model')

    // Route de la API para obtener los resultados
    app.get('/models', function(req, res) {

        // Busca todos los resultados del modelo
        Model.find(function(err, models) {

            // Devuelve en formato JSON
            res.send(models);
        });
    });

}