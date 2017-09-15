var socket;
var artid,artimg,artimg,artdes,art3d,artvid,fname,lname;
var url='localhost';
var port=8080;
var DBarrayData;
var objectcount;
socket = io.connect(url+':'+port);

socket.on('toClient', function (data) {
	for (var i = 0; i <data.DBarray.length ; i++) {
		console.log(data.DBarray[i]);
		localStorage.setItem(i.toString()+"artid", data.DBarray[i].artid);
		localStorage.setItem(i.toString()+"artimgs", data.DBarray[i].artimgs);
		localStorage.setItem(i.toString()+"artimg", data.DBarray[i].artimg);
		localStorage.setItem(i.toString()+"artdes", data.DBarray[i].artdes);
		localStorage.setItem(i.toString()+"art3d", data.DBarray[i].art3d);
		localStorage.setItem(i.toString()+"artvid", data.DBarray[i].artvid);
		localStorage.setItem(i.toString()+"fname", data.DBarray[i].fname);
		localStorage.setItem(i.toString()+"lname", data.DBarray[i].lname);
	}
});


function getDB(){
	DBarray=[]
	localStorage.clear();
	socket.emit('toServer', "getDB");
}

$(document).ready(function(){
	console.log('localStorage length: ' + (localStorage.length)/8);
	for (var i = 0; i < (localStorage.length)/8; i++) {	
		artid = localStorage.getItem(i.toString()+'artid');
		artid= artid.split("t");
		artid=artid[2];
		// artid = localStorage.getItem(i.toString()+'artid').replace(/ *\b\S*?Artifact\S*\b/g, '');
		$("ul").append("<li><h3 class='artifact_id'>"+artid+"</h3></li>");
	}

	document.getElementById("DB").innerHTML = localStorage.getItem("0artid");

});

