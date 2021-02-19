var jet1,jet2,jets
var game
var bullets

function setup(){
  createCanvas(1200,1200);
database = firebase.database();
}
function preload(){
jet2.loadImage();
}

function draw() {
  background(255,255,255); 
  drawSprites();
  if(gamestate === 0){
  game.start();
  }
  if(gamestate === 1){
  game.play();
  }
  if(gamestate === 2){
   game.end(); 
  }
}