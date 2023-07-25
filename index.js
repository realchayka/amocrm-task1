const div = document.querySelector("div");
const header = document.querySelector("h1");
const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");

let timerHrs;
let timerMins;
let timerSecs;
let int;

function showTimer() {
  int = setInterval(() => {
    if (timerSecs === "00" && timerMins === "00" && timerHrs !== "00") {
      timerHrs -= 1;
      timerMins = 59;
      timerSecs = 59;
    } else if (timerSecs === "00" && timerMins !== "00" && timerHrs !== "00") {
      timerMins -= 1;
      timerSecs = 59;
    } else if (timerSecs === "00" && timerMins === "00" && timerHrs === "00") {
      clearInterval(int);

      setTimeout(() => {
        header.setAttribute("hidden", "");
        form.removeAttribute("hidden");
      }, 0);
    } else {
      timerSecs -= 1;
    }

    timerSecs = timerSecs.toString().length === 1 ? "0" + timerSecs : timerSecs;
    timerMins = timerMins.toString().length === 1 ? "0" + timerMins : timerMins;
    timerHrs = timerHrs.toString().length === 1 ? "0" + timerHrs : timerHrs;

    header.textContent = `${timerHrs}hr ${timerMins}min ${timerSecs}sec`;
  }, 1000);
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (!input.value) {
    alert(`Введите время`);
    return;
  }

  timerHrs = input.value.slice(0, 2);
  timerMins = input.value.slice(3, 5);
  timerSecs = input.value.slice(-2);

  header.removeAttribute("hidden");
  form.setAttribute("hidden", "");

  header.textContent = `${timerHrs}hr ${timerMins}min ${timerSecs}sec`;

  showTimer();
});