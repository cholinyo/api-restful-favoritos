'use strict'

var mongoose = require ('mongoose');
var schema = mongoose.Schema;

var favoritoSchema = schema({
    tittle : String,
    description : String,
    url : String,
})

module.exports = mongoose.model('favorito', favoritoSchema);

