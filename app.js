//var express = require('express');
//var app = express();

/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('app'));

app.get('/', function(req, res) {
	res.sendfile('/index.html');
});

app.listen(5000);*/

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('app'));
app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});