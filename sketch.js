var database;
var position;

var gameState = 0,playerCount = 0;

var game, player, form;
var playerInfo
function setup(){
    createCanvas(500,500);
  database = firebase.database()
   game = new Game()
   game.getGameState()
   game.start()
   
}

function draw(){
  if(playerCount === 4 && gameState === 0){
      gameState = 1
      game.updateGameState(1)

  }
  if(gameState ==1){
      clear()
      game.play()
  }
}


function readData(data){
position = data.val()
ball.x = position.X
ball.y = position.Y
}

function updateData(x,y){
    database.ref('Ball/Position').update({X:position.X + x , Y:position.Y + y})
}