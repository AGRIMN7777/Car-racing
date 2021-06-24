var canvas ;
var backGroundImg ;
var GameState = 0 ;
var playerCount ;
var database ;
var form ,player ,game ;
var allPlayers ;

function setup(){
    database = firebase.database();
   canvas = createCanvas(600,600);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount === 4){
    game.update(1);
   }
    if(GameState==1){
        clear();
        game.play();
    }

    drawSprites();
}