
// var numberOfStars = numberOfStars.socket();
var maxSpeed = 1;
var colorOfSky = "rgb(36,43,101)";
var colorOfStars = "rgb(75,81,129)";
var minSizeOfStars = 20;
var maxSizeOfStars = 100; 
var direction = -1; // "1": stars follow mouse OR "-1": stars are repelled by mouse
var xSpeed;
var ySpeed;
var stars = [];

function setup(){

  createCanvas(windowWidth, windowHeight); 
  console.log("particle system i: " + numberOfStars);

  for(var i = 0; i <= numberOfStars; i++){
    var x = random(width);
    var y = random(height);
    var speedFactor = random(0.2, 1); // setup a range of possible speeds
    var weight = random(minSizeOfStars, maxSizeOfStars);
    stars[i] = {x, y, speedFactor, weight}; // push stars to array
  }
}

function draw(){
  background(colorOfSky);
  stroke(colorOfStars); 

  for(var i = 0; i < stars.length; i++) {
    // setup colors
    strokeWeight(stars[i].weight);
    point(stars[i].x, stars[i].y);

    // map mouse position to star speed and direction
    xSpeed = map(mouseX, 0, width, -maxSpeed*direction, maxSpeed*direction);
    ySpeed = map(mouseY, 0, height, -maxSpeed*direction, maxSpeed*direction);

    // make star reappear if pushed beyond canvas
    if (stars[i].x >= width + stars[i].weight) {
      stars[i].x = 0 - stars[i].weight;
    } else if (stars[i].x <= 0 - stars[i].weight) {
      stars[i].x = width + stars[i].weight;
    } else if (stars[i].y >= height + stars[i].weight) {
      stars[i].y = 0 - stars[i].weight;
    } else if (stars[i].y <= 0 - stars[i].weight) {
      stars[i].y = height + stars[i].weight;
    }

    // change star position
    stars[i].x = stars[i].x + xSpeed * stars[i].speedFactor;
    stars[i].y = stars[i].y + ySpeed * stars[i].speedFactor;
  }
}

function windowResized(){
// executed on window resize
  resizeCanvas(windowWidth, windowHeight);
}


