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
function poczatek() {
  clearInterval(animacja1);
  pozycjaPojazdu = 0;
  pojazd.style.left = "0px";
  dzwiekPojazdu.pause();
  clearInterval(animacja2);
  pojazd.style.top = "250px";
  pojazd.style.transform = "rotateZ(0deg)";
  znak.style.transform = "rotateZ(0deg)";
  kat = 20;
}
function sprawdzPozycje(obecnaPozycja) {
  if (obecnaPozycja >= 1210) {
    clearInterval(animacja1);
    dzwiekPojazdu.pause();
    dzwiekWypadku.volume = 1;
    dzwiekWypadku.play();
    rozbijZnak();
    animacja2 = setInterval(rozbijPojazd, 100);
    setTimeout(function () {
      clearInterval(animacja2);
      alert("Rozbiles sie!");
    }, 4000);
  }
}
function rozbijPojazd() {
  pojazd.style.transform = "rotateZ(" + kat + "deg)";
  pojazd.style.top = 250 - kat + "px";
  kat += 5;
}
function rozbijZnak() {
  znak.style.transform = "rotateZ(-45deg)";
}
