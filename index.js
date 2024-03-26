
let target = document.body;

function changeBackgroundColor() {
   target.style.background = getRandomColor();
   setTimeout(changeBackgroundColor,20000);
}

function getRandomColor(){
   const Limit_Value = 256;
   let green = getRandomNumber(Limit_Value );
   let yellow = getRandomNumber(Limit_Value );
   let red = getRandomNumber(Limit_Value );
   return 'rgb('+green+','+yellow+','+red+')'
}
function getRandomNumber(limitValue){
let randomNumber = Math.random();
randomNumber = randomNumber*limitValue;
randomNumber = Math.floor(randomNumber);
return randomNumber;

}
changeBackgroundColor();

