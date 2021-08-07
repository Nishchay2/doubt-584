var bgImage
var burger,cola,dal,fruits,momos,vegetables,vegetables2,pizza,person
var burgerImg,colaImg,dalImg,fruitsImg,momosImg,vegetablesImg,vegetables2Img,pizzaImg,personImg
function preload(){
    bgImage=loadImage("R2.png")
    burgerImg=loadImage("burger.png")
    colaImg=loadImage("cola.png")
    dalImg=loadImage("dal.png")
    momosImg=loadImage("momos.png")
    vegetablesImg=loadImage("vegetables.png")
    vegetables2Img=loadImage("vegetables2.png")
    pizzaImg=loadImage("pizza.png")
    personImg=loadImage("person.png")
}
function setup(){

    createCanvas(1000,600)

}

function draw(){
background(bgImage)

spawnHealthyFood()


drawSprites()
}
function spawnHealthyFood(){
    healthyFood=createSprite(400,300)
    healthyFood.x=Math.round(random(300,600))
    healthyFood.y=Math.round(random(350,550))
    healthyFood.lifetime=100
    healthyFood.scale=0.1
    var rand=Math.round(random(1,4))
    switch(rand){
        case 1:
            healthyFood.addImage(dalImg);
            break;
        case 2:
            healthyFood.addImage(vegetablesImg);
            break;
            case 3: 
            healthyFood.addImage(vegetables2Img);
            break;
            case 4: 
            healthyFood.addImage(fruitsImg);
            break;
    }
}
