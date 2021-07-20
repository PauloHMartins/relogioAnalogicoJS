let digitalElement = document.querySelector('.digital'); //pega o elemento do html relogio digital
let sElement = document.querySelector('.p_s'); //pega o ponteiro do segundos
let mElement = document.querySelector('.p_m'); //pega o ponteiro do segundos
let hElement = document.querySelector('.p_h'); //pega o ponteiro do segundos


function updateClock() { //cria o relogio digital
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

  let sDeg = ((360 / 60) * second) - 90 ;
  let mDeg = ((360 / 60) * minute) - 90 ;
  let hDeg = ((360 / 12) * hour) - 90;
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`; 
  hElement.style.transform = `rotate(${hDeg}deg)`; 


};

function fixZero(time) { //corrige o erro do timer quando for menor que 10
 return time < 10 ? `0${time}` : time;// usando ternario;
}


setInterval(updateClock, 1000);
updateClock();

