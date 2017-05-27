var socket;
var artid,artimg,artimg,artdes,art3d,artvid,fname,lname;
var url='localhost';
var port=8080;
var DBarrayData;
var numberOfStars;


socket = io.connect(url+':'+port);

socket.on('toClient', function (data) {
	
	DBarrayData=data.DBarray
	document.getElementById("DB").innerHTML = DBarrayData[0].artid;
	numberOfStars=DBarrayData.length;
	console.log('number of Stars: ' + numberOfStars); //inside socket.iov
	console.log('data array: ' + DBarrayData.length);

});

console.log('number of stars outside of socket.io: ' + numberOfStars);

function getDB(){
	DBarray=[]
	socket.emit('toServer', "getDB");
	
}


