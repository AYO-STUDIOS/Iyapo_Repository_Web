// Get the modal
var modal = document.getElementById('myModal');
var modaltwo = document.getElementById('myModalTwo');


// Get the button that opens the modal
//place an array of classpop
var btn = document.getElementById("myAbout");
var btn2 = document.getElementById("myContact");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modaltwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span.onclick = function() {
    modaltwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
        if (event.target == modaltwo) {
        modaltwo.style.display = "none";
    }
}

var objects = [];

// creating 6 arrays in our orig. array
for(var i = 0; i < 6; i++){
   objects[i] = [Math.random(), Math.random()] 
}

for(i in objects){
  for(n in objects[i]){
  }
}


document.getElementById("foot").innerHTML;





