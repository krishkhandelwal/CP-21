let bullet, bullet_img;
let wall, thickness;
let weight, speed;
let person, person_img;
let button;

function preload() {
  bullet_img = loadImage("bullet.png");
  person_img = loadImage("person.png");
}

function setup() {
  createCanvas(1600, 400);

  weight = floor(random(30, 52));
  speed = floor(random(223, 321));
  thickness = floor(random(22, 83));

  //making the bullet
  bullet = createSprite(50, 200, 30, 30);
  bullet.addImage("bullet", bullet_img);
  bullet.scale = 0.1;
  bullet.velocityX = speed;

  //maing the person
  person = createSprite(150, height / 2);
  person.addImage("person", person_img);
  person.scale = 0.2;

  //making the wall
  wall = createSprite(1200, height / 2, thickness, height / 2);
  wall.shapeColor = 80;
  wall.depth = -9999;

  button = createButton("Shoot");
  button.position(1550, 200);
  button.mousePressed(reset);
}

function draw() {
  background(20);

  if (bullet.x > wall.x) {
    noLoop();

    let damage = 0.5 * weight * pow(speed, 2) / pow(thickness, 3);

    bullet.x = wall.x - wall.width + damage;

    if (damage < 10) {
      //changing the color to green
      wall.shapeColor = color(0, 255, 0);
    } else {
      //changing the color to red;
      wall.shapeColor = color(255, 0, 0);
    }

    fill(255);
    text(`Speed:${speed}`, 1000, 20);
    text(`Weight:${weight}`, 1000, 50);
    text(`Damage:${floor(damage)}`, 1000, 80);

  }

  drawSprites();
}

function reset() {
  weight = floor(random(30, 52));
  speed = floor(random(223, 321));
  thickness = floor(random(22, 83));

  wall.shapeColor = 80;
  wall.width = thickness;

  bullet.x = 50;
  bullet.velocityX = speed;

  loop();
}
