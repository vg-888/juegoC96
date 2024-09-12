var PLAY=1
var END=0
var gamestate=PLAY
var bg
var backgroundimg
var p1
var p1i
var groupzombie,zombie1,zombie2
var ground
var balas =[]
var bala
var zombie
var zomb

function preload(){
 backgroundimg = loadImage("fondo4.png")
 p1i= loadImage("jugador.png")
 zombie1=loadImage("zombie.png")
 zombie2=loadImage("zombiegrande.png")
}

function setup() {
  createCanvas(400, 200);
bg = createSprite(200, 100, 400, 20);
bg.addImage(backgroundimg);
bg.scale = 1.2
bg.velocityX=-3
bg.x=bg.width/2

p1 = createSprite(40,160, 400, 20);
p1.addImage(p1i)
p1.scale= .2

ground=createSprite(200,210,400,10)

}
function draw() {
  background(200);
  if(gamestate=PLAY){
    if(bg.x<0){
      bg.x=bg.width/2
    }
    
  if (keyDown("w") && p1.y>=160){
    p1.velocityY=-10
      }
      if (keyDown("space")){
        bala = createSprite(45,160,10,10)
         bala.velocityX=20
         bala.y=p1.y
       }
       p1.velocityY=p1.velocityY+.7
p1.collide(ground)
spawnzombie() 
if (p1.isTouching(zomb)||p1.isTouching(zombie)){
  gamestate=END
} 
  }

if(gamestate=END){
  bg.velocityX=0
} 
  drawSprites()
}

function spawnzombie(){
  if(frameCount%60==0){
    var rand=Math.round(random(1,2))
    switch(rand){

      case 1:
      zombie =createSprite(600,165,10,40) 
      zombie.addImage(zombie1)
      zombie.scale=0.17
      zombie.velocityX=-6
      break;
      case 2:
      zomb =createSprite(600,145,10,40) 
      zomb.addImage(zombie2)
      zomb.scale=0.15
      zomb.velocityX=-4
      break;

    }

    
  }
}