class Game{

    constructor(){
        
    }
    getGameState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val()

        })
    }
    updateGameState(stateValue){
        database.ref('/').update({gameState: stateValue })
    }
    start(){
       if(gameState === 0){
        text ("Car Race",200,200)
        player = new Player()
        player.getPlayerCount()

        form = new Form()
        form.display()
       }
    }

    play(){
      text("game started",100,100)
      Player.readPlayerInfo()
      if(playerInfo != undefined){
         var x = 200
         for(var i in playerInfo){
     
         text(playerInfo[i].Name,x,100)
         x = x+50
         }
      }

    }

    end(){

    }
}