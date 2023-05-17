
var trex ,trex_running,trex_img,ground
function preload(){
  trex_img=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(40,170,40,50);
  ground=createSprite(10,175,600,10)
  trex.addAnimation("trex_running",trex_img);
  trex.scale=0.4;
 
}

function draw(){
  background("pink")
  drawSprites();

}
