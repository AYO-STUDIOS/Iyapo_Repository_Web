


var modal = document.getElementById("aboutModal");
var contactModal = document.getElementById("contactModal");
var span = document.getElementsByClassName("close");
var popup = document.getElementsByClassName("pop-up");
var toggle = document.getElementsByClassName('toggle');
toggle.checked = false;

console.log('whats the state of the toggle?');
console.log(toggle); 


 $(document).ready(function() {

  $('.toggle').change(function(){
    $('.toggle').toggle(this.checked); 
    console.log('toggle checked');
    window.location = "static.html";
    toggle.checked = true;
      $('.toggle').toggle(this.unchecked);
  });

  if (document.URL.indexOf("static.html") >= 0) {
    console.log('classic mode');
  }

  var countItems = document.getElementsByTagName("ul")[0].childElementCount;
  console.log('countItems: ' + countItems);  

  $("#repo ul li").click(function() {
      var index = $("#repo ul li").index(this);
      console.log('That was div index #' + index);
      $('.pop-up').fadeIn();
  });

    $('.close').click(function() {
      $('.pop-up').fadeOut();
      console.log('clicking close botton');
  });

  $('#burger').hover(function() {
    $('#hidden-nav').fadeIn();
  });
  $('#burger').mouseleave(function() {
    $('#hidden-nav').fadeOut();
  });

  $("#myAbout").click(function(){
    $('#aboutModal').fadeIn();
  });

  $("#myContact").click(function(){
    $("#contactModal").fadeIn();
  });

  $("#about").click(function(){
    $("#aboutModal").fadeOut();
  });

  $("#contact").click(function(){
    $("#contactModal").fadeOut();
  });


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    contactModal.style.display = "none";
    consol.log("i'm pressing on you damn");
  }

    var data = getElementById('DB');
    console.log(data);
    socket.emit('pos', "index");
    console.log('loading index');

  });



  // var objects = [];

  // // creating 6 arrays in our orig. array
  // for(var i = 0; i < 6; i++){
  //  objects[i] = [Math.random(), Math.random()] 
  // }

  // for(i in objects){
  //   for(n in objects[i]){
  //  }
  // }

  // var toggle = document.getElementsByClassName('toggle');
  // console.log('whats the state of the toggle?');
  // toggle.checked = true; 
  // console.log(toggle);

  //  $('.toggle').change(function(){
  //   $('.toggle').toggle(this.unchecked); 
  //   console.log('toggle checked');
  //   switchIndex()
  //   window.location = "index.html";
  // });

// }


// EXPLORATION

// if(document.URL.indexOf("/_active/index.html") >= 0){ 

  // console.log('you are in the exploration mode');
  




