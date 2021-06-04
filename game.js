class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        player1 = createSprite(120,800,40,50)
    player1.addImage(player1I)
    player1.scale = 0.3;
    player2 = createSprite(210,800,40,50)
    player2.addImage(player2I)
    player2.scale = 0.4;
    players = [player1,player2]
    }

        play(){
            form.hide();
            Player.getPlayerInfo();
            if(frameCount % 200 == 0){
                monster1 = createSprite(1000,600,60,60)
                monster1.addImage(monster1I)
                monster1.scale = 0.4;
                monster1.velocityX = -5;
                monstersGrp.add(monster1)
            }

            if(frameCount % 200  == 0){
                monster2 = createSprite(1000,800,60,60)
                monster2.addImage(monster2I)
               monster2.scale = 0.9;
               monster2.velocityX = -7;
               monsters2Grp.add(monster2)
            }
            if(frameCount % 200 == 0){
                monster3 = createSprite(1300,850,60,60)
           monster3.addImage(monster3I)
           monster3.scale = 0.2 ;
           monster3.velocityX = -4;
           monsters3Grp.add(monster3)
            }
            if(frameCount % 200 == 0){
                monster4 = createSprite(120,160,60,60)
                monster4.addImage(monster4I)
                monster4.scale = 0.3;
                monster4.velocityY = 4;
                monsters4Grp.add(monster4)
             
            }
        





            
           
                
    var x =100;
    var y=900;
    var index =0;
    drawSprites();
    for(var plr in allPlayers){
       
       
        index = index+1;
        x = 500-allPlayers[plr].distanceX;
        y=800-allPlayers[plr].distanceY;
        
        players[index -1].x = x;
        players[index - 1].y = y;
          
        if(index === player.index){
            
          //add code to display the player's name on the respective basket.
          textSize(13)
          fill ("Black")
          text(allPlayers[plr].name,x-35,y+20)

            
        }
       
         
    
    }
   
   
    

   if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
       player.distanceX -= 10
       player.update();
   }
   if (keyIsDown(LEFT_ARROW) && player.index !== null) {
       player.distanceX += 10
       player.update();
   }
   if (keyIsDown(UP_ARROW) && player.index !== null) {
    player.distanceY += 10
    player.update();
}
if (keyIsDown(DOWN_ARROW) && player.index !== null) {
    player.distanceY -= 10
    player.update();
}
    
  
  if (player.index !== null) {
    for (var i = 0; i < monsters2Grp.length; i++) {
        if (monsters2Grp.get(i).isTouching(players)) {
            monsters2Grp.get(i).destroy();
            player.kills+=1;
            player.update();
         
            
        }
        
    }
  }
  if (player.index !== null) {
    for (var i = 0; i < monsters3Grp.length; i++) {
        if (monsters3Grp.get(i).isTouching(players)) {
            monsters3Grp.get(i).destroy();
            player.kills+=1;
            player.update();
        }}
            
        }
        if (player.index !== null) {
            for (var i = 0; i < monsters4Grp.length; i++) {
                if (monsters4Grp.get(i).isTouching(players)) {
                    monsters4Grp.get(i).destroy();
                    player.kills+=1;
                    player.update();
                 
                    
                }
                
            }
          }

          if (player.index !== null) {
            for (var i = 0; i < monstersGrp.length; i++) {
                if (monstersGrp.get(i).isTouching(players)) {
                    monstersGrp.get(i).destroy();
                    player.kills+=1;
                    player.update()
                 
                    
                }
                
            }
          }
        
    

            

            }

             
        }
           
                

        
        
        




    

















