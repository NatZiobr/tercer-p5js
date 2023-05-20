let angulo = 0.0;
let radio = 60;
let radio2 = 540;
let velocidad = 6;
let direccion = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  //-------cambio de color fondo
  var valorSeno = sin(angulo);

  var gris = map(valorSeno, -1, 0, 0, 255);
  background(gris);
  angulo += 0.9;

  //------ expansión

  radio += velocidad * direccion;

  if (radio > width + radio2 || radio < width - radio2) {
    direccion = -direccion;
  }

  //radio += velocidad;

  //if (radio > width) {
  //radio =- width;
  //}

   strokeWeight(radio - 200);
  stroke(0, 0, 50, 100);
  point(300, 300);
  
  strokeWeight(radio - 600);
  stroke(0, 0, 80, 200);
  point(300, 300);

  strokeWeight(radio - 400);
  stroke(0, 0, 60, 200);
  point(300, 300);

  strokeWeight(18);
  stroke(5, 5, 180);
  noFill();
  ellipse(300, 300, radio, radio);

  strokeWeight(17);
  stroke(10, 10, 190);
  noFill();
  ellipse(300, 300, radio + 40, radio + 40);

  strokeWeight(16);
  stroke(20, 20, 200);
  noFill();
  ellipse(300, 300, radio + 80, radio + 80);

  strokeWeight(15);
  stroke(30, 30, 225);
  noFill();
  ellipse(300, 300, radio + 120, radio + 120);

  strokeWeight(14);
  stroke(40, 40, 225);
  noFill();
  ellipse(300, 300, radio + 140, radio + 140);

  strokeWeight(13);
  stroke(50, 50, 225);
  noFill();
  ellipse(300, 300, radio + 180, radio + 180);

  strokeWeight(12);
  stroke(70, 70, 225);
  noFill();
  ellipse(300, 300, radio + 220, radio + 220);

  strokeWeight(9);
  stroke(90, 90, 225);
  noFill();
  ellipse(300, 300, radio + 270, radio + 270);

  strokeWeight(6);
  stroke(100, 100, 225);
  noFill();
  ellipse(300, 300, radio + 320, radio + 320);

  strokeWeight(5);
  stroke(110, 110, 225);
  noFill();
  ellipse(300, 300, radio + 360, radio + 360);

  strokeWeight(4);
  stroke(120, 120, 225);
  noFill();
  ellipse(300, 300, radio + 400, radio + 400);

  strokeWeight(3);
  stroke(155, 155, 225);
  noFill();
  ellipse(300, 300, radio + 440, radio + 440);

  strokeWeight(2);
  stroke(200, 200, 225);
  noFill();
  ellipse(300, 300, radio + 480, radio + 480);

  
  //-----Ojo

  //variables color random
  let r = random(0, 255);
  let g = random(10, 40);
  let b = random(0, 255);
  let a = random(250, 255);

  push();
  strokeWeight(150);
  stroke(235);
  ellipse(300, 300, 40, 20);

  strokeWeight(90);
  stroke(r, g, b, a - 150);
  point(300, 300);

  strokeWeight(10);
  noFill();
  stroke(r, g, b, a - 100);
  ellipse(300, 300, 80, 80);

  strokeWeight(5);
  noFill();
  stroke(r, g, b, a);
  ellipse(300, 300, 95, 95);

  strokeWeight(50);
  stroke(0, 0, 0);
  point(300, 300);

  strokeWeight(20);
  stroke(255);
  point(320, 285);

  strokeWeight(10);
  stroke(255);
  point(315, 302);
  pop();
}
