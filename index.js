//add  nums to clock
let clock = document.getElementById("clock");
for (let i = 1; i < 13; i++) {
  clock.innerHTML += `<div class="num" style="transform:rotate(${30 *
    i}deg)">${i}</div>`;
}

function startClock() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let secHand = document.getElementById("secHand");
  let minHand = document.getElementById("minHand");
  let hourHand = document.getElementById("hourHand");
  secHand.style.transform = `translateX(-50%) 
  rotate(${Math.floor(sec * 6)}deg) `;
  minHand.style.transform = `translateX(-50%) 
  rotate(${Math.floor(min * 6)}deg) `;
  hourHand.style.transform = `translateX(-50%) 
  rotate(${Math.floor((hour - 12) * 30 + min / 2.5)}deg) `;
}

setInterval(startClock, 1000);
