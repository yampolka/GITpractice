let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3000;
let likes=0; 


io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (data) => {
    io.emit('new-message', data);
    console.log("new Message");
    console.log(data);
   

    });
     socket.on('set-like', (data) => {
        likes++;
        io.emit('recalc-like', likes);
        
        console.log(data);
       
    
        });

    socket.on('exit-chat', (user) => {
    console.log(user);
    console.log('exit');
    io.emit('new-message', user+" user has disconnected");
    
    })

});

server.listen(port, () => {
    console.log("server");

});