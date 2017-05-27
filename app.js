//1
var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var path    = require("path");
var port = 8080;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);
var redis = require('redis');
var client = redis.createClient(16618, 'redis-16618.c12.us-east-1-4.ec2.cloud.redislabs.com', {no_ready_check: true});

// app.get('/',function(req,res){
//  res.sendFile(path.join(__dirname+'/'));
//  //__dirname : It will resolve to your project folder.
//  console.log(__dirname);
// });

///listen to the whole directory
app.use(express.static(__dirname + '/'));
	console.log('Simple static server listening at '+url+':'+port);
	console.log(__dirname);

app.get('/static',function(req,res){
 res.sendFile(path.join(__dirname+'/static.html'));
 //__dirname : It will resolve to your project folder.
 console.log(__dirname);
});


client.on('connect', function() {
    console.log('Connected to Redis');
});

var DBarray=[]
//socket.io stuff

io.sockets.on('connection', function (socket) {

socket.on('pos', function (data) {
  	console.log(data);
   
       
  });


  	socket.on('toServer', function (data) {
  	console.log("request")
    client.scan("0", function(err, reply) {
    	
		DBarray=[]
		for(var i=0;i<reply[1].length;i++){
			client.hgetall(reply[1][i], function(err, object) {
				DBarray.push(object)
				
				// socket.emit('toScreen', { r: data.r, g: data.g, b: data.b });  
				// socket.emit('toClient', {artid:object.artid,"artimgs":object.artimgs,"artimg":object.artimg, "artdes":object.artdes, "art3d":object.art3d, "artvid":object.artvid, "fname":object.fname, "lname":object.lname});  
			});
		}
	 // socket.emit('toClient', {});  

	});

	console.log(DBarray)
    socket.emit('toClient', {DBarray});
       
  });
  
});