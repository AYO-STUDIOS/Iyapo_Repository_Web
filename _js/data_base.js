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
		$("ul").append('<li></li>');
		console.log(localStorage.getItem(i.toString()+"artid"));
		$('#repoList li').attr('id', function(i) {
   			return 'object'+(i+1);
		});
		$("li").append(localStorage.getItem(i.toString()+'artid'));
	}
	document.getElementById("DB").innerHTML = localStorage.getItem("0artid");


// give  IDs to all li element
	// $('#repoList li').attr('id', function(i) {
 //   		return 'object'+(i+1);
	// });

	// var n = 12;
	// while(n > 0){
	// 	$("ul").append('<li>' + "atrid"  + '</li>');
	// 	n -= 1;
	// }

	// var str = '';
	// for (i=0;i<array.length; i++) {
	//    str += '<li id=\'li' + i + '\'>' + array[i] + '</li>';
	// }
	// $('#repoList').append(str);

});


