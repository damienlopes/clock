var s;
var m;
var h;
var sangle, mangle, hangle;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  h = hour();
  m = minute();
  s = second();
  sangle = map(s, 0, 60, 0, 360);
  mangle = map(m, 0, 60, 0, 360);
  hangle = map(h % 12, 0, 12, 0, 360);
  translate(250, 250);
  rotate(-90);

  push()
  rotate(sangle)
  stroke ("red")
  strokeWeight(5)
  line (0,0,200,0)
  pop()

  push()
  rotate(mangle)
  stroke("green")
  strokeWeight(3)
  line(0,0,150,0)
  pop()

  push()
  rotate(hangle)
  stroke("yellow")
  strokeWeight(2)
  line(0,0,100,0)
  pop()
 
  noFill()
  stroke("red")
  strokeWeight(3)
  arc(0,0,400,400,0,sangle)

  stroke("green")
  strokeWeight(2)
  arc(0,0,350,350,0,mangle)

  stroke("yellow")
  strokeWeight(1)
  arc(0,0,300,300,0,hangle)
}
