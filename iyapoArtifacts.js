function Artifact(v, z, m, n, sped, unit) {
  this.xu = v;
  this.yu = z;
  this.x = m;
  this.y = n;
  this.speed = sped;
  this.unit = unit;
  this.xDir = 1;
  this.yDir = 1;
  this.diameter = random(30, 90);

}


Artifact.prototype.update = function() {
  this.x = this.x + (this.speed * this.xDir);
  if (this.x >= this.unit || this.x <= 0) {
    this.xDir *= -1;
    this.x = this.x + (1 * this.xDir);
    this.y = this.y + (1 * this.yDir);
  }
  if (this.y >= this.unit || this.y <= 0) {
    this.yDir *= -1;
    this.y = this.y + (1 * this.yDir);
  }
}


Artifact.prototype.draw = function() {
  strokeWeight(2);
  fill(255,60,35,100);
  ellipse(this.xu + this.x, this.yu + this.y, this.diameter, this.diameter);
}
