
// CLASSIC

if(document.URL.indexOf("static.html") >= 0){ 

  console.log('you are in the classic mode');

  var modal = document.getElementById('aboutModal');
  var contactModal = document.getElementById('contactModal');
  var btn = document.getElementById("myAbout");
  var btn2 = document.getElementById("myContact");
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  btn2.onclick = function() {
    contactModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    consol.log("i'm pressing on you damn");
  }
  span.onclick = function() {
    contactModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
        if (event.target == contactModal) {
        contactModal.style.display = "none";
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

  $('#burger').hover(function() {
    $(this).find('#hidden-nav').fadeIn();
  });
  $('#burger').mouseleave(function() {
    $(this).find('#hidden-nav').fadeOut();
  });

  var countItems = document.getElementsByTagName("ul")[0].childElementCount;
  console.log('countItems: ' + countItems);


  $(document).ready(function() {

    $("#repo ul li").click(function() {
        var index = $("#repo ul li").index(this);
        console.log('That was div index #' + index);
    });

  });

  var toggle = document.getElementsByClassName('toggle');
  console.log('whats the state of the toggle?');
  toggle.checked = true; 
  console.log(toggle);

   $('.toggle').change(function(){
    $('.toggle').toggle(this.unchecked); 
    console.log('toggle checked');
    window.location = "index.html";
  });
}


// EXPLORATION

if(document.URL.indexOf("index.html") >= 0){ 

  console.log('you are in the exploration mode');
  
  $('.toggle').change(function(){
    $('.toggle').toggle(this.checked); 
    console.log('toggle checked');
    window.location = "static.html";
  });

  var toggle = document.getElementsByClassName('toggle');
  console.log('whats the state of the toggle?');
  toggle.checked = false;
  console.log(toggle); 
  
}

var data = getElementById('DB');
console.log('reading data');

