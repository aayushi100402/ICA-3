let imgM, imgN, imgO;

function preload() {
  imgM = loadImage('Assets/jungle.jpg')
  imgN = loadImage('Assets/mountain8.jpg')
  imgO = loadImage('Assets/witch.jpg')
}

function setup() {
  imgM.resize(0, 500)
  imgN.resize(0, 500)
  imgO.resize(0, 500)

  createCanvas(700,700);

  imgM.loadPixels()
  imgN.loadPixels()
  imgO.loadPixels()
}

function draw() {
  for (let i = 0; i < 5; i++) {
    let x = random(0, width);
    let y = random(0, height);
    swatch(x, y, 60);
  }
}

function swatch(x, y, c) {
  let pic, picA, picB;
  let k = random(3);
  k = floor(k);
  switch (k) {
    case 0:
      pic = imgO.get(x, y, c, c);
      break;
    case 1:
      pic = imgM.get(x, y, c, c);
      break;

    case 2:
      pic = imgN.get(x, y, c, c);
      break;
  }
  image(pic, x, y);

}