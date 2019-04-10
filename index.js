'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3678;
var app = require('./app');

mongoose.connect('mongodb://localhost:27017/cursofavoritos', { useNewUrlParser: true });

app.listen(3678, function () {
 //   console.log("Conexión a BBDD Correcta")
    console.log("API REST FAVORITOS FUNCIONANDO en http://localhost:" + port)
    console.log("Nodemon")
});

