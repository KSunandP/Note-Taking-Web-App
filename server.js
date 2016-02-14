"use strict"

let express = require('express');
let server = express();

server.use(express.static(__dirname));

server.listen(3000, function(){
    console.log("Server started at http://localhost:3000");
});