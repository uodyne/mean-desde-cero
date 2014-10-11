// Módulo de la API (JSON)
module.exports = function(app) {
    var mongoose = require('mongoose'),
        // Cargamos el modelo que creamos en el punto anterior
        Model = require('../models/model')

    // Route de la API para obtener los registros
    app.get('/models', function(req, res) {

        // Busca todos los registros del modelo
        Model.find(function(err, models) {

            // Devuelve en formato JSON
            res.send(models);
        });
    });


    // Nuevo registro
    app.post('/models', function (req, res) {
        Model.create({
            name : req.body.name // Usando Angular
        }, function(err, model) {
            if(err) {
                res.send(err);
            }

            Model.find(function(err, models) {
                res.send(models);
            });
        });
    });


    // Eliminar registro
    app.delete('/models/:model_id', function (req, res) {
        Model.remove({
            _id: req.params.model_id
        }, function(err, model) {
            if(err) {
                res.send(err);
            }

            Model.find(function(err, models) {
                res.send(models);
            });
        });
    });
}