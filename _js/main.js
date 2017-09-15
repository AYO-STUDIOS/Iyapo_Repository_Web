// 
 $(function(){ $("header").load("header.html") });
 $(function(){ $("footer").load("footer.html") });

var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


 function hasScrolled() {
    var st = $(this).scrollTop();
    console.log('st' + st);
        
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('folded-down').addClass('folded-up');
      console.log("scroll down");
      console.log("document.height: " + $(document).height() );
      console.log("window.height: " + $(window).height() );
      // in order for the window.high to work remember to put Doctor html at the top of your html page
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('folded-up').addClass('folded-down');
          console.log("sroll up");
          console.log('??????????????');
        }
    }
    
    lastScrollTop = st;
    // console.log('lastScrollTop: ' + lastScrollTop);
}
