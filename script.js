const obliczButton = document.querySelector("#oblicz");
const pracownicy = document.querySelectorAll("#pracownicy .pracownik");
const czasInputs = document.querySelectorAll(".czas");
const stawkaInputs = document.querySelectorAll(".stawka");
const wyplataSpans = document.querySelectorAll(".wyplata");
const najlepsiPracownicySpan = document.querySelector("#najlepsi-pracownicy");

obliczButton.addEventListener("click", () => {
  let najlepsiPracownicy = [];

  for (let i = 0; i < pracownicy.length; i++) {
    let czas = parseInt(czasInputs[i].value);
    let stawka = parseInt(stawkaInputs[i].value);
    let wyplata = czas * stawka;

    if (czas > 160) {
      pracownicy[i].parentElement.style.backgroundColor = "green";
      wyplata += (czas - 160) * stawka * 2;
    }

    wyplataSpans[i].innerHTML = wyplata;

    if (czas < 100) {
      pracownicy[i].parentElement.style.backgroundColor = "red";
    }

    najlepsiPracownicy.push({
      name: pracownicy[i].innerHTML,
      czas: czas,
    });
  }

  najlepsiPracownicy.sort((a, b) => b.czas - a.czas);
  najlepsiPracownicy = najlepsiPracownicy.slice(0, 3);
  najlepsiPracownicySpan.innerHTML = najlepsiPracownicy
    .map((employee) => `${employee.name} (${employee.czas} godzin)`)
    .join(", ");
  console.log("Trzech najlepszych pracowników:", najlepsiPracownicy);
});
