let buttonInc;
let buttonDec
let HLeft = 1;
let HRight = 1;
let HLeftST;
let HRightST;
let NLeft = 1;
let NRight = 1;
let NLeftST;
let NRightST;
let ans;
let angleRight=0;
let angleLeft=0;
function setup() {
  createCanvas(800, 400);
  
  buttonInc1 = createButton('+');
  buttonInc1.position(358, 320);
  buttonInc1.size(20, 20);
  buttonInc1.mousePressed(incHLeft);
  buttonDec1 = createButton('-');
  buttonDec1.position(358, 372);
  buttonDec1.mousePressed(decHLeft);
  buttonInc2 = createButton('+');
  buttonInc2.position(450, 320);
  buttonInc2.size(20, 20);
  buttonInc2.mousePressed(incNHRight);
  buttonDec2 = createButton('-');
  buttonDec2.position(450, 372);
  buttonDec2.mousePressed(decNHRight);
  buttonInc3 = createButton('+');
  buttonInc3.position(282, 320);
  buttonInc3.size(20, 20);
  buttonInc3.mousePressed(incNLeft);
  buttonDec3 = createButton('-');
  buttonDec3.position(282, 372);
  buttonDec3.mousePressed(decNLeft);
}

function draw() {
  background(210);
  fill(50);
  HLeftST = str(HLeft);
  HRightST = str(HRight);
  NLeftST = str(NLeft);
  NRightST = str(NRight);
  ans = NLeftST+"N+"+HLeftST+"H→"+HRightST+"NH";
  textAlign(CENTER);
  textSize(40);
  text(ans, 10, 340, 800, 400);
  textAlign(LEFT);
  textSize(25);
  text("2", 330, 365, 800, 400);
  text("2", 405, 365, 800, 400);
  text("3", 525, 365, 800, 400);
  textSize(20);
  
  push();
  translate (width/2+100, height/2-70);
  triangle(-15, 30, 15, 30, 0, 0)
  rotate(angleRight);
  rect(-125, -15, 250, 15);
  pop();
  push();
  translate (width/2-200, height/2-70);
  triangle(-15, 30, 15, 30, 0, 0)
  rotate(angleLeft);
  rect(-125, -15, 250, 15);
  pop();
  fill(255, 255, 255);
  
  text("N", 193, 141, 800, 400);
  text("H", 493, 141, 800, 400);
  fill(50);
  
  if(angleRight >= -0.24 && angleRight <= 0.24){
	angleRight += (HRight*3-HLeft*2)*0.001;
  }else
	angleRight -= (HRight*3-HLeft*2)*0.001;
  if ((HRight*3-HLeft*2)*0.001 == 0){
	  if(angleRight > 0 )
		  angleRight -= 0.001;
	  else if(angleRight < 0)
		  angleRight += 0.001;
  }
  
  if(angleLeft >= -0.24 && angleLeft <= 0.24){
	angleLeft += (NRight*1-NLeft*2)*0.001;
  }else
	angleLeft-=(NRight*1-NLeft*2)*0.001;
   
  if ((NRight*1-NLeft*2)*0.001 == 0){
	  if(angleLeft > 0 )
		  angleLeft -= 0.001;
	  else if(angleLeft < 0)
		  angleLeft += 0.001;
  }
  print(angleLeft);
}

function incHLeft() {
  HLeft++;
}

function decHLeft() {
  if(HLeft > 0)
	HLeft--;
}

function incNHRight() {
  HRight++;
  NRight++;
}

function decNHRight() {
  if(HRight > 0)
    HRight--;
	NRight--;
}

function incNLeft() {
  NLeft++;
}

function decNLeft() {
  if(NLeft > 0)
	NLeft--;
}