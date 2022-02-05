var player
var select
var identifier
var cat, dog, fox, lion, snake, wolf
var startbutton
var GameState = 0;
var bushesGroup;
var randomFood;
var food;
var startimg, selectimg
var bush, apple

function preload(){
cat = loadImage ("cat.jpg");
dog = loadImage ("dog.jpg");
fox = loadImage ("fox.jpg");
lion = loadImage ("lion.jpeg");
snake = loadImage ("snake.png");
wolf = loadImage ("wolf.jpeg");
startimg = loadImage("start.png")
selectimg = loadImage("select.jpg")
bush = loadImage("bush.jpeg")
apple = loadImage("apple.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)
select = createSprite(windowWidth/2 - 20,windowHeight/2, 100, 80);
player = createSprite(200,200,50,50);
player.scale = 0.3
player.visible = false
startbutton = createSprite(200,200,100,80);
startbutton.addImage(startimg);
startbutton.setCollider("rectangle", 0, 0,100,80)
//startbutton.scale = 0.1;
select.addImage(selectimg);
select.scale = 0.4;
startbutton.visible = false
randomFood = Math.floor(Math.random() * 5);
food = createSprite (50,50,80,80);
food.visible = false;
bushesGroup = new Group();
bushes();
}

function draw(){
background("yellow")
if(mousePressedOver(select)){
    identifier = Math.floor(Math.random() * 6) + 1
    console.log(identifier)
    switch(identifier){
        case 1: player.addImage(cat)
        break
        case 2: player.addImage(dog)
        break
        case 3: player.addImage(fox)
        break
        case 4: player.addImage(lion)
        break
        case 5: player.addImage(snake)
        break
        case 6: player.addImage(wolf)
        break
    }
    
    select.destroy();
    player.visible = true;
    startbutton.visible = true
    startbutton = true 

}
if(mousePressedOver(startbutton)){
    startbutton.destroy();
    //select.destroy();

  GameState = 1;
  
}

if(GameState === 1){
    if(keyDown ("left")){
        MoveLeft();
    }
    
    if(keyDown ("right")){
        MoveRight();
    }
    
    if(keyDown ("up")){
        moveup();
    }
    
    if(keyDown ("down")){
        moveDown();
    }
    for(var i = 0; i<bushesGroup.length; i++){
        bushesGroup.get(i).visible = true;

        if(i === randomFood){
            foodX = bushesGroup.get(i).x
            foodY = bushesGroup.get(i).y
            food.x = foodX
            food.y = foodY
            food.addImage(apple)
            food.scale = 0.7
            food.visible = true;
        }
        /*if(player.isTouching(bushesGroup.get(i)) && player.isTouching(food)){
            bushesGroup.get(i).destroy();
            bushesGroup.get(i).visible = false;
        }*/
    }
    
}


drawSprites();
}

function MoveLeft(){
    player.x -= 10
}

function MoveRight(){
    player.x += 10
}

function moveup(){
    player.y -= 10
}

function moveDown(){
    player.y += 10
}

function bushes(){
    for( var i = 0; i<5; i++ ){
        randomX = Math.floor(Math.random() * width) + 1;
        randomY = Math.floor(Math.random() * height) + 1;
        var bushes = createSprite (randomX, randomY, 10, 10)
        bushes.addImage(bush)
        bushesGroup.add(bushes)
        bushes.visible = false;
        bushes.scale = 0.5

    }
}