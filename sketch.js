var player1, player2, monster1, monster2, monster3, monster4, background, player, form, players
var player1I, player2I, monster1I, monster2I, monster3I,  monster4I, backgroundI,allPlayers
var gameState = 0;
var playerCount;
var kills = 0;
var database;
var monstersGrp, monsters2Grp, monsters3Grp, monster4Grp
var score = 0;

function preload(){
    player1I = loadImage("boycharacter.png")
    player2I = loadImage("boycharacter2.png")
    monster1I = loadImage("monster1.png")
    monster2I = loadImage("monster2.png")
    monster3I = loadImage("monster3.png")
    monster4I = loadImage("monster4.png")
   bgI = loadImage("bg2.jpeg")
   
}

function setup (){
    database = firebase.database();
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.getState();
    game.start()
    monstersGrp = new Group();
    monsters2Grp = new Group();
    monsters3Grp = new Group();
    monsters4Grp = new Group();
   
    
   
   
    
 
}
function draw(){
    background("white")
   
    if (playerCount == 2){
        game.update(1)
    }
    if(gameState == 1){
        background(bgI)
        fill("black")
        textSize(17)
        text("score "+player.kills,displayWidth-250,20)
      
      
      game.play();
      

    }
    if(player.kills >= 10){
        game.update(2)
    }

    if(gameState == 2){
        background("black")
        fill("white")
        text("Game over",displayWidth/2,displayHeight/2)
        for(var plr in allPlayers){
            var index = 1;
            if(index == player.index){

            
        
        if(allPlayers.player1.kills>=10){
            fill("white")
            text("player 1 wins",displayWidth/2,displayHeight/2+170)

        }}}
    }
       
        
        
    }

   
    
   


















