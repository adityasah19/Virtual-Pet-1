//Create variables here
var dog,happydog,database,foodS,foodStock,dogimg,happydogimg
function preload()
{
	dogimg=loadImage('dogImg.png')
  happydogimg=loadImage('dogimg1.png')
}


function setup() {
	createCanvas(500,500);
  database=firebase.database()
  
  dog=createSprite(250,250,97,83)
  dog.addImage('dogimg')
  foodStock=database.ref('food')
  foodStock.on('value',readStock)


}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
  dog.addImage(happydogimg)
} 


drawSprites();
  //add styles here

  text()
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0
 }else{
   x=x-1
 } 
 database.ref('/').update({
   food:x
 }) 
 
}


