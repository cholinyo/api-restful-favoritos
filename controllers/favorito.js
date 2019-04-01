'use strict'
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
    var favoritoId = reg.params.id;

    res.status(200).send({data: favoritoId});

}
function getFavoritos (req , res) {
    var params = req.body;
    res.status(200).send({favorito: params});

}
function saveFavorito (req , res) {
    var params = req.body;
    res.status(200).send({favorito: params});
}
function updateFavorito (req , res) {
    var favoritoId = reg.params.id;
    res.status(200).send({data: favoritoId});
}
function deleteFavorito (req , res) {
    var favoritoId = reg.params.id;
    res.status(200).send({data: favoritoId});

}

module.exports = {prueba, getFavorito,getFavoritos,saveFavorito,updateFavorito,deleteFavorito
};