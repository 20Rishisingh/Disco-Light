const start = document.getElementById("start");
const stop = document.getElementById("stop");

const randomColors = function () {
   const hex = "0123456789ABCDEF";
   let color = "#";
   for(let i=1; i<=6; i++){
      color += hex[Math.floor(Math.random() * 16)];
   }
   return color;
}

let enterValid;
const startLight = function(){
   if(!enterValid){
      enterValid = setInterval(changeBG, 100);
   }

   function changeBG () {
      document.body.style.backgroundColor = randomColors();
   }
}

const stopLight = function() {
   clearInterval(enterValid);
   enterValid = null;
}

start.addEventListener('click', function (e) {
   startLight();
});

stop.addEventListener('click', function (e) {
   stopLight();
});
