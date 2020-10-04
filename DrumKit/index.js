
//Detecting sound through button press
for(var i=0; i<document.querySelectorAll(".drums").length; i++){
  document.querySelectorAll(".drums")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    buttonClick(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
//Detecting sound through keypress
var buttonInnerHtml = this.innerHTML;
document.addEventListener("keypress",function(event){
  buttonClick(event.key);
  buttonAnimation(event.key);
});


function buttonClick(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid");
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressedKey");
  setTimeout(function(){
    activeButton.classList.remove("pressedKey");
  },100);
}
