var canvas;
var music;
var surface1,surface2,surface3,surface4,box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    surface1 = createSprite(75,575,150,50);
    surface2 = createSprite(225,575,150,50);
    surface3 = createSprite(375,575,150,50);
    surface4 = createSprite(525,575,150,50);

    surface1.shapeColor="green";
    surface2.shapeColor="blue";
    surface3.shapeColor="orange";
    surface4.shapeColor="red";



    //create box sprite and give velocity
    box = createSprite(random(20,550),200,20,20);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=7;

    edges=createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    box.bounceOff(edges);

   /* box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);*/



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor=rgb(0,255,0);
       
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor=rgb(0,0,255);
        music.play();

    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();

    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="red";

    }



    drawSprites();
}
