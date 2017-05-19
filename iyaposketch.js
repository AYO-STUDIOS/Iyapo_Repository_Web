
var u = 150;
var count;
var artifacts = [];

function setup() {
  createCanvas(1000, 800);
  noStroke();
  var w = width / u;
  var h= height / u;
  count = w * h;

  var index = 0;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      artifacts[index++] = new Artifact(x*u, y*u, u/2, u/2, 
        random(0.05, 0.8), u);
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < count; i++) {
    artifacts[i].update();
    artifacts[i].draw();
  }
}