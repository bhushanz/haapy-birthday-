var box = document.querySelector(".birth");
var display=1;
function hideShow(){
      if(display == 0){
        box.style.display = 'none';
        display=1;
      }
      else{
        box.style.display = 'block';
        display= 0;
      }
}const button = document.querySelector(".btn");
 const name = document.querySelector(".birth");
 const bolloon = document.querySelector("#box");

 button.addEventListener("click", () =>{
    name.classList.toggle("pulse");
    bolloon.classList.toggle("go-up");
    let sound = new Audio("./music/sound2.mp3");
    sound.play();
 });