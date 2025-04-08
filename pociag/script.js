const pojazd = document.getElementById("pociag");
const znak = document.getElementById("znakStop");
const dzwiekPojazdu = document.getElementById("dzwiekPojazdu");
const dzwiekWypadku = document.getElementById("dzwiekWypadku");

let predkoscPojazdu = 200;
const maxPredkosc = 50;
let pozycjaPojazdu = 0;
let kat = 10;
let animacja1;
let animacja2;

function zmienPozycje() {
  pozycjaPojazdu = pozycjaPojazdu + 5;
  pojazd.style.left = pozycjaPojazdu + "px";
  sprawdzPozycje(pozycjaPojazdu);
}

function startPojazdu() {
  animacja1 = setInterval(zmienPozycje, predkoscPojazdu);
  dzwiekPojazdu.volume = 0.2;
  dzwiekPojazdu.play();
}

function przyspiesz() {
  if (predkoscPojazdu > maxPredkosc) {
    predkoscPojazdu = predkoscPojazdu - 40;
  }
  if (dzwiekPojazdu.volume <= 0.8) {
    dzwiekPojazdu.volume += 0.2;
  }
  clearInterval(animacja1);
  animacja1 = setInterval(zmienPozycje, predkoscPojazdu);
}

function zatrzymajPojazd() {
  clearInterval(animacja1);
  dzwiekPojazdu.pause();
}
