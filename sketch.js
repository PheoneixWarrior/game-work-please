var score = 0
var  gamestate = 0
var obstacles
var player
var playerImage
var obstacle1Image, obstacle2Image, obstacle3Image
var wall1, wall2
var backgroundImage
var obstacle, obstacleGroup
var obstacleArray = []




function preload(){

backgroundImage = loadImage("background.jpg")
obstacle1Image = loadImage("log1.png")
playerImage = loadImage("real player.png")

}

function setup(){
  createCanvas(1000, 700)
bg = createSprite(500, 350, 50, 50)
bg.addImage(backgroundImage)
player = createSprite(500, 300 , 50, 50)
player.shapeColor = "black"
bg.velocityY = 10
wall1 = createSprite(1000, 1400, 150, 2800)
wall2 = createSprite(1, 1400, 150, 2800)
obstacleGroup = new Group()
player.addImage(playerImage)
player.scale = .15
}

function draw(){
background("white")
if(gamestate === 0){





player.collide(wall1)
player.collide(wall2)
if(keyDown(RIGHT_ARROW) && obstacleGroup.isTouching(player) === false){

player.x = player.x + 10

}
if(keyDown(LEFT_ARROW) && obstacleGroup.isTouching(player) === false){

  player.x = player.x - 10
  
  }

if(bg.y > 350 && obstacleGroup.isTouching(player) === false){

bg.y = 300

}

spawnObstacles()
  }
drawSprites()
 if(obstacleGroup.isTouching(player)){

obstacleGroup.setVelocityYEach(0)
bg.velocityY = 0
fill("black")
textSize(100)
text("GAME OVER", 300, 350)
gamestate = 1
}
textSize(25)
   fill("black")
  text("score:" + score, 500, 100)
}


function spawnObstacles(){

  if(frameCount % 50 === 0){
var rand = Math.round(random(10, 800))
var rand1 = Math.round(random(50, 180))
var rand3 = Math.round(random(1, 4))
console.log(rand3)
obstacle = createSprite(rand, 700, rand1, 30)
obstacle.addImage(obstacle1Image)
switch(rand3){

case 1:obstacle.scale = .1; 
break
case 2:obstacle.scale = .15; 
break
case 3:obstacle.scale = .2; 
break
case 4:obstacle.scale = .25; 
break
default: break

}

obstacle.velocityY = -(obstacle.velocityY + (score + 100) / 10)
obstacleArray.push(obstacle)
obstacleGroup.add(obstacle)
for(var i = 0; i < obstacleArray.length; i ++ ){

if(player.y > obstacleArray[i].y ){
//console.log(obstacleArray) 
score = score + 1
obstacleArray.splice(0, 1)
//obstacleArray.shift()
}

}
obstacle.lifetime = 80


}

}
