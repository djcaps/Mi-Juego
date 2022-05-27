var bg_img;
var NPC,NPC_group,NPC1,NPC2,NPC3,NPC4,NPC5;
var PC,PC_img;
var Vida,VidaExtra;
var Medalla;

function preload()
{
  bg_img = loadImage("fondo_0.png");
  NPC1 = loadImage("NPC1_0.png");
  NPC2 = loadImage("NPC2_0.png");
  NPC3 = loadImage("NPC3_0.png");
  NPC4 = loadImage("NPC4_0.png");
  NPC5 = loadImage("NPC5_0.png");
  PC_img = loadImage("PC_0.png");
  Vida = loadImage("vida_0.png");
  VidaExtra = loadImage("vida extra_0.png");
  Medalla = loadImage("medalla_0.png");
}

function setup() {
  createCanvas(1000,1200);
  frameRate(80);

  PC=createSprite(500, 1000, 50, 50);
  PC.addImage(PC_img);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,1000,1200);
  push()
  fill(255);
  //text("Velocidad vertical: "+round(vy),800,75);
  pop();

  
  drawSprites();
}


