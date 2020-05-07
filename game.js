var gamePattern=[];
var userCLickedPAttern=[];
var level=0;
var flag =false;
var i;
var buttonColours =["red","blue","green","yellow"];

$(document).keypress(function(){
  if(!flag)
  {
$("h1").text("Level "+level);
nextSequence();
flag=true;
}
});



$(".btn").click(function() {
    var userChosenColor = this.id;
    userCLickedPAttern.push(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userChosenColor);
    animatePress(userChosenColor);

});

function startOver() {
  level =0;
  gamePattern=[];
  flag =false;
}

function nextSequence() {
  userCLickedPAttern=[];
  level++;
  $("h1").text("Level "+level);
  var randomNumber =Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour)
  i=0;

}
function playSound(name ){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}
function animatePress(currentColor) {
$("."+currentColor).addClass("pressed");
setTimeout(function(){$( "."+currentColor ).removeClass( "pressed" );}, 70);
}
function checkAnswer(currentLevel) {
  if(currentLevel!=gamePattern[i])
{
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass( "game-over" );}, 200);
  $("h1").text("Game over!Press any key to start again");
  startOver();
}
else if(i==level-1) {
setTimeout(nextSequence(),1000);
}
else{
  i++;
}
}
