const express = require('express');
const path = require('path');
const cors  = require('cors');
const http = require('http')
const Socket = require('./Socket');
require('dotenv').config();

class Server {

    constructor(){

        this.app    = express();
        this.port   = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io     = new Socket(this.server);
        this.middleware();
    }

    // CONFIGURE MIDDLEWARE
    middleware(){
        this.app.use( express.static( path.resolve( __dirname, '../../public')));
        this.app.use(cors());
    }

    initServer(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor Conectado a puerto: ${this.port}`)
        });
    }


}

module.exports = Server;