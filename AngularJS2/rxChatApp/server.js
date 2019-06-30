let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3000;


io.on('connection', (socket) => {
    console.log('user connected');

socket.on('new-message', (data) => {
    io.emit('new-message', data);
});

socket.on('exit-chat', (user) => {
    io.emit('new-message', user+" user has disconnected");
})

});

server.listen(port, () => {
    console.log("server");
});