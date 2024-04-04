const express = require('express');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = '/';

        // Rutas del servicio
        this.routes();

    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }



    listen() {
        // Ejecutar servidor
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports = Server;