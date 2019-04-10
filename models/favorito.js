'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
    title : String,
    description : String,
    url : String,
})

module.exports = mongoose.model('Favorito',FavoritoSchema); /*Si quisieramos indicar el nombre de a coleccion 
donde guarda todos los favoritos, tendriamos que indicarlo en el 3er parámetro, si no, mongodb pluraliza la coleccion
en este caso será Favoritos */


