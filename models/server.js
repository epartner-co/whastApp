const express = require('express');
const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/api.epartner-la.com/fullchain.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.epartner-la.com/privkey.pem')
};

class Server {

    constructor() {
        this.app = express();
        this.host = process.env.HOST || '172.26.12.51'
        this.port = process.env.PORT || 80;
        this.userPath = '/';

        // Rutas del servicio
        this.routes();

    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }




    listen() {
        // Ejecutar servidor
        https.createServer(options, (req, res) => {
            res.writeHead(200);
            res.end('hello world\n');
          }).listen(443);
    }
}

module.exports = Server;