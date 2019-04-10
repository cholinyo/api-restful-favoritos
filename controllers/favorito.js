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

function getFavoritos (req , res) {
    
    Favorito.find({}).sort('-description').exec((err,favoritos)=> {
        if (err) {
            res.status(500).send({message: "Error al devolver marcadores"}); //Error en el servidor
        }
        if (!favoritos){
            res.status(400).send({message: "No hay favoritos"}); //Error en el servidor
        }
        res.status(200).send({data: favoritos});
        })
    }
function getFavorito (req , res) {
    var favoritoId = req.params.id;
    Favorito.findById(favoritoId, function(err, favorito){
        if (err) {
            res.status(500).send({message: 'Error al devolver el favorito'});
        }
        if (!favorito) {
            res.status(400).send({message: "No hay favorito"}); //Error en el servidor
        }

        res.status(200).send({data: favorito});
    });
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
    var update = req.body;

    Favorito.findOneAndUpdate(favoritoId,update,(err,favoritoUpdated)=>{
        if (err) {
            res.status(500).send({message: "Error al actualizar en bbdd"}); //Error en el servidor
        }
        res.status(200).send({favorito: favoritoUpdated}); // Accion correcta
    });

    console.log(update)

}

function deleteFavorito (req , res) {
    var favoritoId = req.params.id;
    var update = req.body;


}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito,
};