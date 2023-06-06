const loading = document.querySelector(".loading-page");
const back = document.querySelector(".bg");

var load = 0;
var int = setInterval(blurf, 30);
function blurf() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loading.innerHTML = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  back.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
