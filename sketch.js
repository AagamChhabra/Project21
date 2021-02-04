var canvas;
var music;
var block1,block2,block3,block4;
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,600,200,100);
block1.shapeColor="blue";
//block2=createSprites()
//block3=createSprites()
//block4=createSprites()
block2=createSprite(350,600,200,100);
block2.shapeColor="orange";
box=createSprite(200,100,50,50);
block3=createSprite(600,600,200,100);
block3.shapeColor="purple";
block4=createSprite(850,600,200,100)
block4.shapeColor="green";

    //create box sprite and give velocity
box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    //box.bounceOff(block1);
    //box.bounceOff(block2);
    //box.bounceOff(block3);
    //box.bounceOff(block4);

    //add condition to check if box touching surface and make it box
if(box.isTouching(block1)){
    box.shapeColor='blue';
    music.play()
}
if(box.isTouching(block2)){
    box.shapeColor='orange';
    music.play()
}
if(box.isTouching(block3)){
    box.shapeColor='purple';
    music.play()
}
if(box.isTouching(block4)){
    box.shapeColor="green";
}
if(keyDown("up")){
    box.velocityY=-5;
}
if(keyDown("down")){
    box.velocityY=5;
}
if(keyDown("right")){
    box.velocityX=5;
}
if(keyDown("left")){
    box.velocityX=-5;
}
    drawSprites();
}
