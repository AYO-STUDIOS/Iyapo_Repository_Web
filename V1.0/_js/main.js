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

$( "#burger-box" ).hover(
  function() {
    $(".dot").animate({
      width: 30,
      marginTop: "+=10px",
      marginBottom: "+=10px"
    }, 300);
    $('#hidden-nav').fadeIn();
    
  }, 
  function() {
    $(".dot").animate({
      width: 10,
      marginTop: "-=10px",
      marginBottom: "-=10px"
    }, 300);
    $('#hidden-nav').fadeOut();
  }
);

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

});





