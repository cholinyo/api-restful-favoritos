'use strict'

var Favorito = require('../models/favorito');

function prueba (req, res){ /*Parametro condicional*/
    if(req.params.nombre){
        var nombre = req.params.nombre;
    }else {
        var nombre = "Sin Nombre";
    }
    res.status(200).send(
        {
        texto:"hola mundos con node.js y express " + nombre,
        data: [2,3,4]})
};

function getFavorito (req , res) {
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId});

}

function saveFavorito (req , res) {

    var favorito =new Favorito();
    var params = req.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    // Guardamos en la bbdd

    favorito.save((err, favoritoStored )=> {
        if(err) {
            res.status(500).send({message: "Error al guardar en bbdd"}); //Error en el servidor
        }
        
            res.status(200).send({favorito: favoritoStored}); // Accion correcta
    })

    res.status(200).send({favorito: params});
}

function updateFavorito (req , res) {
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId});

}

function deleteFavorito (req , res) {
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId});

}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito,
};