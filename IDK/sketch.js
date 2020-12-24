let imgM, imgN, imgX;
let click;

function preload() {
  imgM = loadImage('Assets/instalogo-feaimage-page-2018.jpg');
  imgN = loadImage('Assets/instalogo-feaimage-page-2018.jpg');
  imgX = loadImage('Assets/1887e7a9-2b08-4bc8-beb6-31d52adaee8c.jpg');
}

function setup() {
  imgM.resize(0, 500);
  imgN.resize(0, 500);
  imgX.resize(0, 500);

  createCanvas(imgM.width, imgM.height);
  imgM.loadPixels();
  imgN.loadPixels();
  imgX.loadPixels();
  
  click = 0;
}

function draw() {

  // let x = random(0, width);
  // let y = random(0, height);
  swatch(mouseX, mouseY, 50);
}

function swatch(x, y, s) {
  let pic, picA, picB;
  let k = click;

    switch(k)
      {
        case 0 :
             pic = imgX.get(x-s/2,y-s/2,s,s);
          break;

        case 1 :
             pic = imgM.get(x-s/2,y-s/2,s,s);
          break;

        case 2 :
            pic = imgN.get(x-s/2,y-s/2,s,s);
          break;
      }

if(k<3)
{
   image(pic,x-s/2,y-s/2);
} 


}

function mouseClicked()
{
  click++;
  if(click>3)
    {
      click=0;
    }
}