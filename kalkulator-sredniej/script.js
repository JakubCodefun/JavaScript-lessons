let oceny = [];
let suma = 0;

function dodajOcene() {
  let input = document.getElementById("ocena");
  let ocena = Number(input.value);
  if (ocena >= 1 && ocena <= 6) {
    oceny.push(ocena);
    suma = suma + ocena;
    document.getElementById("listaOcen").innerText = "Oceny: " + oceny.join(", ");
    input = "";
  } else {
    alert("Prosze wpisac liczbe 1-6");
  }
}

function policzSrednia() {
  if (oceny.length === 0) {
    document.getElementById("srednia").innerText = "Brak ocen";
  } else {
    let sredniaOcen = suma / oceny.length;
    document.getElementById("srednia").innerText = "Średnia ocen wynosi: " + sredniaOcen.toFixed(2);
  }
}
function pokazOceneOpisowa() {
  let ocenaOpisowa = document.getElementById("ocenaOpisowa");
  if (sredniaOcen >= 5.5) {
    ocenaOpisowa.innerText = "Wychodzi ocena Celująca";
  } else if (sredniaOcen >= 4.75) {
    ocenaOpisowa.innerText = "Wychodzi ocena Bardzo Dobry";
  } else if (sredniaOcen >= 3.75) {
    ocenaOpisowa.innerText = "Wychodzi ocena Dobry";
  } else if (sredniaOcen >= 2.75) {
    ocenaOpisowa.innerText = "Wychodzi ocena Dostateczny";
  } else if (sredniaOcen >= 1.75) {
    ocenaOpisowa.innerText = "Wychodzi ocena Dopuszczajacy";
  } else {
    ocenaOpisowa.innerText = "Wychodzi ocena Niedostateczny";
  }
}
