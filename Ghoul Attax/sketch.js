const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  Ghoul = loadImage("download.png");
  Red = loadImage("download (5).png");
  Blue = loadImage("download (6).png");
  Green = loadImage("download (7).png");
  Yellow = loadImage("download (8).png");

  RedG = loadImage("download (1).png");
  BlueG = loadImage("download (2).png");
  GreenG = loadImage("download (4).png");
  YellowG = loadImage("download (3).png");
}


function setup(){
    createCanvas(windowWidth-10,windowHeight-20);
    engine = Engine.create();
    world = engine.world;

    //--------------------------------------------- GHOUL SPRITE---------------------------------------------------------------
    ghoul = createSprite(width/2,height/2);
    ghoul.addImage(Ghoul);
    ghoul.scale = 1.5
    
    //--------------------------------------------------- PLAYERS----------------------------------------------------------------
    red = createSprite(150,150)
    red.addImage(Red);
    red.scale = 1.3

    blue = createSprite(width-150,150)
    blue.addImage(Blue);
    blue.scale = 1.3

    green = createSprite(150,height-150)
    green.addImage(Green);
    green.scale = 1.3

    yellow = createSprite(width-150,height-150)
    yellow.addImage(Yellow);
    yellow.scale = 1.3

    //----------------------------------------------------- GHOUL PLAYERS-----------------------------------------------------------
    redG = createSprite(150,150)
    redG.addImage(RedG);
    redG.scale = 1.5
    redG.visible = false

    blueG = createSprite(width-150,150)
    blueG.addImage(BlueG);
    blueG.scale = 1.5
    blueG.visible = false

    greenG = createSprite(150,height-150)
    greenG.addImage(GreenG);
    greenG.scale = 1.5
    greenG.visible = false
    
    yellowG = createSprite(width-150,height-150)
    yellowG.addImage(YellowG);
    yellowG.scale = 1.5
    yellowG.visible = false
}

function draw(){
    background("#6faf9c");
    Engine.update(engine);
      
    drawSprites()
}

