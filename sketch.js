var PLAY = 1
var END = 0
var GAME_OVER = 0
var PAUSE = 0

var cenario, cenario_png
var chao_fake
var arbusto
var palmeira


var moeda_yoshi, moeda_yoshiimg
var moeda, moedaimg


var goomba


var ponteiro = 0


var gameState = PLAY


var vegetaçãoG, inimigosG, vegetacao, inimigos


function preload(){
cenario_png = loadImage("Cenario .png") 
mario_correndo = loadAnimation("Mario correndo 1.png", "Mario correndo 2.png")
nuvemimg = loadImage("Nuvem.png")
//moeda_yoshiimg = loadAnimation("Yoshi.c1.png", "Yoshi.c2.png", "Yoshi.c3.png", "Yoshi.c4.png")
goomba_png = loadAnimation("Goomba1.png", "Goomba2.png")
}


function setup() {


createCanvas(10000, 10000)
//CENARIO
cenario = createSprite( 0, 746 ,100,100);
cenario.addImage("cenario", cenario_png)
cenario.scale = 0.3


mario = createSprite(50, 790, 100, 100)
mario.addAnimation("mario_corre", mario_correndo)


vegetaçãoG=createGroup();
inimigosG=createGroup();


}

function draw() {
background("lightblue");
drawSprites()


//PONTUAÇÃO
text("Pontuação: " + ponteiro, 1250, 41 )


//Play
if (gameState === PLAY) {
ponteiro = ponteiro + Math.round(getFrameRate()/50);
cenario.velocityX = -4
inimigos();


//cenario se movendo

if (cenario.x < 0) {
cenario.x = cenario.width/2;
}

//spawn de nuvem
if (frameCount % 60 === 0) {
    nuvem = createSprite(10000, 120, 40, 10)
    nuvem.addImage("nuvem_img", nuvemimg)
    nuvem.y = Math.round(random(52,696))
    nuvem.x = Math.round(random(5000, 10000))
    nuvem.velocityX = -30
    nuvem.scale = 2
}


}
//GAME OVER
if (gameState === GAME_OVER) {
    cenario.velocityX = 0
console.log("game_over")

//POSIÇÃO DO MAUSE


}
console.log(mouseX);
console.log(mouseY);
}


function inimigos() {
if (World.frameCount % Math.round(random(10, 80)) === 0){
 goomba = createSprite(2400, 799, 100, 100)
 goomba.addAnimation("goomba.img", goomba_png)
 goomba.scale = 2 
 goomba.velocityX = -5
 

 inimigosG.add(goomba);
    }
}


//Fazer o cenario picotado

//criar inimigos 

//Fazer a flor de fogo

//Fazer UM boos 