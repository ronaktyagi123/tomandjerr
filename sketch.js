
var cat,mouse,background



function preload() {
    //load the images here
backgroundImage.loadAnimation("garden.png")
catImage.loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png")
mouseImage.loadAnimation("jerryOne.png","jerryTow.png","jerryThree.png","jerryFour.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(400,400,200,200)
    cat.addImage(catAnimation)
    cat.scale=1
     mouse=createSprite(200,200,100,100)
     mouse.addImage(mouseAnimation)
     mouse.scale=0.5
     background=createSprite(400,400,200,200);
     background.addImage(backgroundAnimation)
     background.scale=1.5
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed()
    drawSprites();
  





}


function keyPressed(){
    if(cat.x-mouse.x<(cat.Width-mouse.Width)/2){
  //For moving and changing animation write code here
    }

if(keycode===Left_Arrow){
cat.velocityX=-5;
cat.addAnimation("catrunning",catImg2)
cat.changeAnimation("catrunning")
}
}