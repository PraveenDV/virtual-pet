//Create variables here
var happyDog, dog, database, foodS, foodStock, Dog;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  console.log(database);

 Dog=createSprite(250,400,10,10);
 Dog.addImage(dog);
 Dog.scale=0.2;

 foodStock=database.ref('Food');
 foodStock.on("value", readStock);
}


function draw() {  
  background("green");  
  drawSprites();
  //add styles here
  textSize(20);
  fill("blue");
  text("Press up arrow key to feed the dog", 100, 30);

  textSize(15)
  fill("white");
  text("Food remaining:"+foodS, 200,250);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happyDog);
  }

}

function readStock(data){
  foodS=data.val();
  console.log(foodS);
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  });
}


