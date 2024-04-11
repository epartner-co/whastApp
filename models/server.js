const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');


class Server {

    constructor() {
        this.app = express();
        this.host = process.env.HOST || '172.26.12.51'
        this.port = process.env.HTTP_PORT || 80;
        this.portHTTPS = process.env.HTTPS_PORT || 443;
        this.keyPath = process.env.KEY_PATH || '/etc/letsencrypt/live/api.epartner-la.com/privkey.pem';
        this.certPath = process.env.CERT_PATH || '/etc/letsencrypt/live/api.epartner-la.com/fullchain.pem';
        this.userPath = '/';

        // Rutas del servicio
        this.routes();

    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }



    listen() {
        const httpsServerOptions = {
            key: fs.readFileSync(this.keyPath),
            cert: fs.readFileSync(this.certPath),
        };
        
        // Ejecutar servidor
        const serverHttp = http.createServer(this.app);
        serverHttp.listen(this.port, this.host);

        // Servidor HTTPS
        const serverHttps = https.createServer(httpsServerOptions, this.app);
        serverHttps.listen(this.portHTTPS, this.host);

    }
}

module.exports = Server;