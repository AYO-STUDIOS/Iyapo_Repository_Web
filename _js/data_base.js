			var socket;
			var artid,artimg,artimg,artdes,art3d,artvid,fname,lname;
			var url='localhost';
			var port=8080
			var DBarrayData
			//var url='http//47.18.216.182';
			//$(document).ready(function(){
			socket = io.connect(url+':'+port);
			socket.on('toClient', function (data) {
				
				// console.log(data.length)
				
				// artid = data.artid;
				// artimgs = data.artimgs;
				// artimg = data.artimg;
				// artdes = data.artdes;
				// art3d = data.art3d;
				// artvid = data.artvid;
				// fname = data.fname;
				// lname = data.lname;
				// var distext=artid+" "+artimgs+" "+artimg+" "+artdes
				DBarrayData=data.DBarray
				console.log(DBarrayData);
				document.getElementById("DB").innerHTML = DBarrayData[0].artid;
				// document.getElementById("DB").innerHTML = distext;
			});
			//When color button is clicked emit data to socket
			function getDB(){
				DBarray=[]
				// var bval = document.getElementById('bval').value;
				socket.emit('toServer', "getDB");
			}