
const express = require('express');
var cors = require('cors')

class server{

    constructor(){

        this.app = express();
        this.port = 8080;
        this.autosPath = '/api/autos';
       
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){       
        this.app.use(this.autosPath, require('../Routes/autos'));
    }

   listen(){
        this.app.listen(this.port);
   }

    middlewares(){
        // CORS
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('Public'));
    }
}



module.exports = server;