
class Game {
    constructor(){}
    
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
        player.getCount();
        form = new Form()
        form.display();

      }
      jet1 = createSprite(300,300);
      jet1.daddImage(jet1);
      jet2 = createSprite(1000,1000);
      jet2.addImage(jet2);
      
      jets = [jet1,jet2]
    }
    play(){
      form.hide();
      var index = 0
      jets[index].x = mouseX;
      jets[index].y = mouseY;
      jets[index+1].x = mouseX;
      jets[index+1].y = mouseY;
      if(keyDown("space")){
        if(frameCount % 2 === 0){
          bullets = createSprite(400,300,5,5);
          bullets.velocity = -3; 
        }
      }
    }
    end(){
      alert("the game is over");
    }
  }