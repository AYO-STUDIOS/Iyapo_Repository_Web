var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
 res.sendFile(path.join(__dirname + '/index.html'));
 //__dirname : It will resolve to your project folder.
 console.log();
});

app.get('/copy',function(req,res){
 res.sendFile(path.join(__dirname+'/indexcopy.html'));
});

app.get('/static',function(req,res){
 res.sendFile(path.join(__dirname+'/static.html'));
});

app.listen(3000);

console.log("Running at Port 3000");