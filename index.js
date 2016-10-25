var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    // io.emit('some event', { for: 'everyone' });
    // socket.emit('my other event', { my: 'data' });
    // socket.emit('news', { hello: 'world' });

    // socket.on('chat message', function(msg) {
    //     socket.broadcast.emit(msg);
    // });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
