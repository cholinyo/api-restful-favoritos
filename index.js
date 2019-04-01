'use strict'

var port = process.env.PORT || 3678;
var app = require ('./app');


app.listen(3678, function(){
    console.log("API REST FAVORITOS FUNCIONANDO en http://localhost:"+port)
    console.log ("Nodemon")
});


