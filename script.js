const calculate = document.querySelector("#calculate");
const employees = document.querySelectorAll("#employees .employee");
const timeInputs = document.querySelectorAll(".time");
const rateInputs = document.querySelectorAll(".rate");
const paymentSpans = document.querySelectorAll(".payment");
const bestEmployeesSpan = document.querySelector("#best-employees");

calculate.addEventListener("click", () => {
  let bestEmployees = [];

  for (let i = 0; i < employees.length; i++) {
    let time = parseInt(timeInputs[i].value);
    let rate = parseInt(rateInputs[i].value);
    let payment = time * rate;

    if (time > 160) {
      employees[i].parentElement.style.backgroundColor = "green";
      payment += (time - 160) * rate * 2;
    }

    paymentSpans[i].innerHTML = payment;

    if (time < 100) {
      employees[i].parentElement.style.backgroundColor = "red";
    }

    bestEmployees.push({
      name: employees[i].innerHTML,
      time: time,
    });
  }

  bestEmployees.sort((a, b) => b.time - a.time);
  bestEmployees = bestEmployees.slice(0, 3);
  bestEmployeesSpan.innerHTML = bestEmployees
    .map((employee) => `${employee.name} (working time - ${employee.time})`)
    .join(", ");
});
