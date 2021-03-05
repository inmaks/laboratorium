let buttonInc;
let buttonDec
let asd = 0;
let asdST;
let asdasd = 0;
let asdasdST;
let ans;
function setup() {
  createCanvas(400, 400);
  
  buttonInc1 = createButton('+');
  buttonInc1.position(136, 320);
  buttonInc1.size(20, 20);
  buttonInc1.mousePressed(incIndex1);
  buttonDec1 = createButton('-');
  buttonDec1.position(136, 372);
  buttonDec1.mousePressed(decIndex1);
  buttonInc2 = createButton('+');
  buttonInc2.position(226, 320);
  buttonInc2.size(20, 20);
  buttonInc2.mousePressed(incIndex2);
  buttonDec2 = createButton('-');
  buttonDec2.position(226, 372);
  buttonDec2.mousePressed(decIndex2);
}

function draw() {
  background(210);
  fill(50);
  asdST = str(asd);
  asdasdST = str(asdasd);
  ans = "N+"+asdST+"H→"+asdasdST+"NH";
  textAlign(CENTER);
  textSize(40);
  text(ans, 10, 340, 380, 400);
  textAlign(LEFT);
  textSize(25);
  text("2", 110, 365, 120, 400);
  text("2", 185, 365, 400, 400);
  text("3", 305, 365, 400, 400);
  
}

function incIndex1() {
  asd++;
}

function decIndex1() {
  asd--;
}
function incIndex2() {
  asdasd++;
}

function decIndex2() {
  asdasd--;
}
