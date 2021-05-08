const body = document.querySelector("body");
const timer = document.getElementById("date-time-now");
const slider = document.getElementById("banner");
const frecuency = 2000;

/* banner */
let images = [];
images[0] = "./imagenes/pricing_1.jpg";
images[1] = "./imagenes/pricing_3.jpg";
images[2] = "./imagenes/dos1.png";
images[3] = "./imagenes/featured.jpg";
images[4] = "./imagenes/pilates-2.jpg";

let i = 0;
window.addEventListener("load", () => {
  setInterval(() => {
    if (i < images.length) {
      console.log("Pegando foto");
      slider.style.backgroundImage = `url(${images[i]})`;
      i++;
    } else {
      i = 0;
    }
  }, frecuency);
});

/* clock */
const showActualTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  setTimeout(() => {
    showActualTime();
    let text = `${hours}:${minutes}:${seconds}`;
    return (timer.innerText = text);
  }, frecuency);
};

body.addEventListener("load", showActualTime());
