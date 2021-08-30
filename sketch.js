var bg
var astronaunt,astronaunt2,meteors, planets
var astro,astro2,meteor,planet
var button,button2,button3,button4
var buttons,buttons2,buttons3,buttons4
var cats,dogs,rats,spaceships,balls,bananas
var cat,dog,rat,spaceship,banana,ball
var gameState="PLAY"
var red,white
var red_b, white_b
var four,five
var score
var i
var space

function preload(){
    bg=loadImage("bg.png")
    astro=loadImage("astro.png")
    astro2=loadImage("astro 2.png")
    meteor=loadImage("meteor.png")
    planet=loadImage("jupiter.png")
    buttons=loadImage("start.png")
    buttons2=loadImage("next.png")
    red_b=loadImage("red.png")
    white_b=loadImage("white.png")
   
    cats=loadImage("cat.png")
    dogs=loadImage("dog.png")
    spaceships=loadImage("spaceship.png")
    rats=loadImage("rat.png")
    bananas=loadImage("banana.png")
    balls=loadImage("ball.png")
    four=loadImage("four.jpg")
    five=loadImage("five.jpg")
    

}




function setup(){
createCanvas(windowWidth,windowHeight)
astronaunt = createSprite(200,500);
astronaunt.addImage(astro);
astronaunt.scale=0.2

astronaunt2 = createSprite(900,100);
astronaunt2.addImage(astro2);
astronaunt2.scale=0.2


meteors = createSprite(900,800);
meteors.addImage(meteor);
meteors.scale=0.2


 

button=createSprite(700,500,100,50)
button.addImage(buttons);
button.scale=0.25

button2=createSprite(700,500,100,50)
button2.addImage(buttons2);
button2.scale=0.5
button2.visible=false

button3 = createSprite(400,400);
button3.scale=0.2
button3.visible=false
button3.addImage("red",red_b)
button3.addImage("dog",dogs)
button3.addImage("banana",bananas)
button3.addImage("rat",rats)
button3.addImage("five",five)

button4 = createSprite(700,400);
button4.scale=0.2
button4.visible=false
button4.addImage("white",white_b)
button4.addImage("cat",cats)
button4.addImage("four",four)
button4.addImage("ball",balls)
button4.addImage("spaceship",spaceships)

button2.depth=button4.depth+1
score=0
}






function draw (){
background(bg);
textSize(50);
fill("purple")
strokeWeight (10)
stroke ("white")
text("WELCOME TO MISSION JUPITER",20,35)
text("Score:"+score,900,35)
if(mousePressedOver(button)){
meteors.visible=false;
astronaunt.visible=false;
astronaunt2.visible=false;

button.visible=false;
button2.visible=true

}
if(gameState==="PLAY"){


if(mousePressedOver(button2)){


i= Math.round (random(1,5))
}
switch(i){
case 1:
text("What color was the astronaunts suit?",400,200)
button3.changeImage("red",red_b)
button4.changeImage("white",white_b)
button3.visible=true
button4.visible=true
if (mousePressedOver(button4)){
    score+=1
    text("HEADING TO JUPITER!",800,400)
}
else if(mousePressedOver(button3)){
    text("UH OH, SETBACK",800,400)
}
break

case 2:
    text("Which one is the dog?",400,200)
    button3.changeImage("dog",dogs)
    button4.changeImage("cat",cats)
    button3.visible=true
    button4.visible=true
    if (mousePressedOver(button3)){
        score+=1
        text("HEADING TO JUPITER!",800,400)
    }
    else if(mousePressedOver(button4)){
        text("UH OH, SETBACK",800,400)
    }
    break
    
    case 3:
    text("Which one is the banana?",400,200)
    button3.changeImage("banana",bananas)
    button4.changeImage("ball",balls)
    button3.visible=true
    button4.visible=true
    if (mousePressedOver(button3)){
        score+=1
        text("HEADING TO JUPITER!",800,400)
    }
    else if(mousePressedOver(button4)){
        text("UH OH, SETBACK",800,400)
    }

break

case 4:
text("Which one is bigger?",400,200)
button4.changeImage("spaceship",spaceships)
button3.changeImage("rat",rats)
button4.visible=true
button3.visible=true
if (mousePressedOver(button3)){
    score+=1
    text("HEADING TO JUPITER!",800,400)
}
else if(mousePressedOver(button4)){
    text("UH OH, SETBACK",800,400)
}
break 

case 5:
    text("How old are You?",400,200)
    button4.changeImage("four",four)
    button3.changeImage("five",five)
    button4.visible=true
    button3.visible=true
    if (mousePressedOver(button4)){
        score+=1
        text("HEADING TO JUPITER!",800,400)
    }
    else if(mousePressedOver(button3)){
        text("UH OH, SETBACK",800,400)
    }
    

}

if(score>=3){
    gameState="END"
    button3.visible=false
    button4.visible=false
    button2.visible=false

    }

}
if(gameState==="END"){
    text("WELCOME TO JUPITER!",400,200)
    bg=loadImage("bg.jpg")
    planets = createSprite(600,450);
    planets.addImage(planet);
    planets.scale=0.5

}


drawSprites()
}
