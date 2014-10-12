module.exports = function(app) {

    // Prueba de request y response
    app.get('/test', function(req, res) {
        res.writeHead(200);
        res.write('<h1>SUPU Rocks!</h1>');
        res.end();
    });

    // Enrutar todo a INDEX principal de la app
    app.get('*', function(req, res) {
        res.sendfile('public/_system/views/index.html');
    });
}