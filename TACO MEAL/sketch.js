let img;

function preload()
{
img = loadImage('taco-fries.jpg');
}

function setup() {
    img.resize(0,500);

  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
for(let i =0;i<60;i++){
  let x = random(0,width);
  let y = random(0,height);
  let r = random(15,mouseX/10);
  
  let c = img.get(x,y);

  fill(c[0],c[1],c[2],128);  
  //set fill + alpha by reading rgb values from fill individually
  // stroke(255,128);
  noStroke();
  // ellipse(x,y,r);
  
    raindrop(x,y,r);
// 
}
}

function raindrop(x,y,r)
{
    // let r = random(15,20);
    let c = img.get(x,y);
    fill(c[0],c[1],c[2],128);  

    ellipse(x,y,r);

  // fill(c);

  for(let i = 0;i<360;i +=random(15,45))
    {
      let rx = r/2 *sin(radians(i)) + random(-3,3);
      let ry = r/2 * cos(radians(i)) + random(-3,3);
      ellipse(x+rx, y +ry, r*0.25);
    }
}
//move cursor from left to right on the img