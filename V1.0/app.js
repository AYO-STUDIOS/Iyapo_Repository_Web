//1
var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var path = require("path");
var port = 8080;
var url='localhost';
var server = app.listen(port);
var io = require("socket.io").listen(server);
var redis = require('redis');
var client = redis.createClient(16618, 'redis-16618.c12.us-east-1-4.ec2.cloud.redislabs.com', {no_ready_check: true});
var DBarray=[];
var DBsize=92

client.on('connect', function() {
    console.log('Connected to Redis');
});

///listen to the whole directory
app.use(express.static(__dirname + '/'));
	console.log('Simple static server listening at '+url+':'+port);
	console.log(__dirname);

app.get('/static',function(req,res){
 res.sendFile(path.join(__dirname+'/static.html'));
 console.log(__dirname);
});


for(var i=0; i<DBsize; i++){ 	
client.hgetall(i, function(err, object) {
    // console.log(object);
    DBarray.push(object);
});

}
//socket.io stuff
io.sockets.on('connection', function (socket) {
  	socket.on('toServer', function (data) {
	  	console.log("request");
		console.log(DBarray);
	    socket.emit('toClient', {DBarray});     
  });  
});