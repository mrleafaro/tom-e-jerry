var RatoImg,RatoImg2,RatoImg3
var GatoImg,GatoImg2,GatoImg3
var fundo
var tom
var jerry
function preload() {
    //load the images here
    fundo=loadImage("images/garden.png")
    RatoImg=loadAnimation("images/mouse1.png")
    RatoImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    RatoImg3=loadAnimation("images/mouse4.png")
    GatoImg=loadAnimation("images/cat1.png")
    GatoImg2=loadAnimation("images/cat2.png","images/cat3.png")
    GatoImg3=loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom=createSprite(870,600)
     tom.addAnimation("tom1",GatoImg)
     tom.scale=0.2

     jerry=createSprite(200,600)
     jerry.addAnimation("jerry1",RatoImg)
     jerry.scale=0.15
}

function draw() {

    background(fundo);
    if (tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tom3",GatoImg3)
        tom.changeAnimation("tom3")
        tom.x=300
        tom.scale=0.2

        jerry.addAnimation("jerry3",RatoImg3)
        jerry.changeAnimation("jerry3")
        jerry.scale=0.15
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
  jerry.addAnimation("jerry2", RatoImg2) 
  jerry.changeAnimation("jerry2")  
  jerry.frameDelay=25
  
  tom.velocityX=-5
  tom.addAnimation("tom2", GatoImg2)
  tom.changeAnimation("tom2")
  
  }
  

}
