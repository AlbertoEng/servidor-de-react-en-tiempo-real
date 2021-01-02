const socket = require('socket.io');

class Socket {


    constructor( server ){
        this.io =  socket(server);
        this.initEvents();
    }

    initEvents = function(){
        this.io.on('connection', ( socket ) => {
            socket.on('mensaje-cliente', ( data )=>{
                console.log( data );
                this.io.emit('mensaje-from-server', {
                    messageBody: data.messageBody
                })
            })
        });

    }

}

module.exports = Socket;