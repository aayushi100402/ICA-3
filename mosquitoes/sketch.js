let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Assets/salamisound-2276970-mosquito-or-similar-in (1).mp3');
}
let capture;
let cluster = []; //creating a term cluster
let n;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}
function setup() {
  let c = createCanvas(800, 600); //video being captured (p5 ref)
  //saveCanvas(c, 'myCanvas', 'jpg');
  capture = createCapture(VIDEO);
  capture.hide();
  //background(0,5);          //optional background
  //noStroke()                //removing stroke optional
  n = 100;


  for (i = 0; i < n; i++) //for loop to execute the objects repeatedly
  {
    cluster[i] = new Particle();
    print("new particle created"); //optional to print on console
  }
}

function draw() {
  image(capture, 0, 0, width, height);
  //filter(INVERT);
  for (i = 0; i < n; i++) { //for loop to execute update and                                             display command
    cluster[i].display() //to execute the display command
    cluster[i].update() //to execute the update command

  }


}

function mouseClicked() {
  translate(mouseX, mouseY) //to create particle from origin on the                                       mouseclick
  for (i = 0; i < n; i++) {
    cluster[i] = new Particle(mouseX, mouseY);
    print("new particle created");
  }

}
class Particle { //creation of class to specify the objects nature                            including colours,position and movement
  constructor() {
    this.size = random(100, 50);
    this.col = color(random(0, 255), random(0, 255), random(0, 255));
    this.str = color(random(0, 255), random(0, 255), random(0, 255));
    this.stw = random(2, 8)
    this.posX = random(width * 0.3, height * 0.7);
    this.posY = random(width * 0.3, height * 0.7);

    this.velX = random(-2, 4);
    this.velY = random(-2, 4);

  }


  display() { //to show and create the objects on the canvas
    fill('BLACK');

    text('>I<',this.posX, this.posY, this.size);
   
  }

  update() { //to include all the changes after                                           displaying the objects
    this.posX = this.posX + this.velX;
    this.posY = this.posY + this.velY;

    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX
    }
    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY
    }
    function canvasPressed() {
 
  mySound.play();
}
  }

}