'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
    tittle : String,
    description : String,
    url : String,
})

module.exports = mongoose.model('Favorito',FavoritoSchema);

//module.exports = mongoose.model('Favorito', FavoritoSchema);

