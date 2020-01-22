import io from 'socket.io-client';

class SocketClass {
    promise = false;

    constructor() {
        let socket = io('http://localhost:5000');

        this.promise = new Promise((resolver, rechazar) => {
            socket.on('connect', function () {
                if (socket.connected) {
                    resolver(socket);
                } else {
                    rechazar(':(')
                }
            });
            
        });




        

    }

    getSocket() {
        return this.promise;
    }
}

export const Socket = new SocketClass();




// socket.emit('add user', 'nuevo chat');//0001 0002 0003
// //0004 0005
// socket.on('login', function (data) {
//     console.log(data)
// })

// //0006
// socket.on('stop typing', function (data) {
//     console.log('0006', 'stop typing', data)
// });


// //0007
// socket.emit('new message', 'este es mi mensaje');

// //0008 //0009
// socket.on('new message', function (data) {
//     console.log('0008', 'new message', data);
// });

// //0010
// socket.emit('typing');


// socket.on('typing', function (data) {
//     console.log('0011', 'typing', data)
// });

