let button = document.getElementById("but");

function plays(){
  let audio = new Audio("kumpas.mp3");
  audio.play();
}

button.addEventListener("click", plays);