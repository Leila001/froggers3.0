var Player, playerImg, Sun, pond, lilypad1, lilypad2, lilypad3, dirt, cloud2, bgImg, lilypadImg, sunImg,rock,rockImg,rockGroup; 

function preload(){
  playerImg=loadImage("./assets/My project.png");
  bgImg=loadImage("./assets/waterfallBG.png");
  lilypadImg=loadImage("./assets/lilypad-removebg-preview.png")
  sunImg=loadImage("./assets/OIP-removebg-preview.png")
  rockImg=loadImage("./assets/download-removebg-preview.png")
}

function setup() {
  createCanvas(1000,800);
  bg=createSprite(displayWidth/2-20, displayHeight/2-40, 20, 20);
  bg.addImage(bgImg);
  bg.scale=1.1;
 // Player=createSprite(40, 550, 50, 50);
 // Player.addImage=(playerImg);
 Player=createSprite(displayWidth-1225, displayHeight-162, 50, 50);
  Player.addImage(playerImg);
  Player.scale=0.3;
 

  Sun=createSprite(950,20)
  Sun.addImage(sunImg)
  Sun.scale=0.5

  pond=createSprite(500,600,1000,25) 
 lilypad1=createSprite(50,600,50,25)
 lilypad1.addImage(lilypadImg)
 lilypad1.scale=0.1
 //lilypad2=createSprite(200,575,50,25)
 //lilypad3=createSprite(300,575,50,25)
 //dirt=createSprite(800,600,500,25)
 //cloud=createSprite(700,200,70,25)
 //cloud2=createSprite(700,225,100,25)
 rockGroup=new Group();
}

function draw() {
  background(255,255,255);  
 background("skyBlue")




  //if (keyDown("RIGHT_ARROW")){
    //Player.x=Player.x+30
  //}

  //if (keyDown("LEFT_ARROW")){
    //Player.x=Player.x-30
  //}
Player.shapeColor="red"
//Sun.shapeColor="yellow"
pond.shapeColor="teal"
//lilypad1.shapeColor="green"
//lilypad2.shapeColor="green"
//lilypad3.shapeColor="green"
//dirt.shapeColor="brown"
//cloud.shapeColor="white"
//cloud2.shapeColor="white"
enemy();

  drawSprites();
}

function enemy(){
  if (frameCount%200===0){

    // giving random x and y postions to the rock
  rock=createSprite(1000,575,60,60);
 
  rock.addImage(rockImg);
  rock.scale=0.15;
  rock.velocityX=-3;
//  rock.debug=true;
 // rock.setCollider("rectangle", 0,0,400,400);
 // rock.lifetime=400;
  rockGroup.add(rock);

  }
}