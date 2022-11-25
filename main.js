const elInput1 = document.querySelector(".inpot_itim1");
const elInput2 = document.querySelector(".inpot_itim2");
const elButton = document.querySelectorAll(".button_itims");
const elResult = document.querySelector(".temp-result");
const elTengText = document.querySelector(".button_itimteng");
const elItim = document.querySelectorAll(".button_itim");
const elAcDalet = document.querySelector(".button_itimsAC");

let despilayElInput1 = "";
let despilayElInput2 = "";
let upgrader = "";
let result = "";

elButton.forEach(function (number) {
  number.addEventListener("click", function (e) {
    despilayElInput2 += e.target.textContent;
    elInput2.textContent = despilayElInput2;
  });
});

elItim.forEach(function (operator) {
  operator.addEventListener("click", function (e) {
    if (!despilayElInput2) return;
    let targetOperation = e.target.textContent;
    if (despilayElInput1 && despilayElInput2 && targetOperation) {
      calculate();
    } else {
      result = parseFloat(despilayElInput2);
    }
    addTop(targetOperation);
    upgrader = targetOperation;
  });
});

function addTop(name = "") {
  despilayElInput1 += despilayElInput2 + name + " ";
  elInput1.textContent = despilayElInput1;
  elInput2.textContent = "";
  despilayElInput2 = "";
  result.textContent = result;
}
function calculate() {
  switch (upgrader) {
    case "*":
      result = parseFloat(result) * parseFloat(despilayElInput2);
      break;
    case "+":
      result = parseFloat(result) + parseFloat(despilayElInput2);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(despilayElInput2);
      break;
    case "/":
      result = parseFloat(result) / parseFloat(despilayElInput2);
      break;
    case "%":
      result = parseFloat(result) % parseFloat(despilayElInput2);
      break;
    case "**":
      result = parseFloat(result) ** parseFloat(despilayElInput2);
      break;
  }
}
elTengText.addEventListener("click", function () {
  if (!despilayElInput2 || !despilayElInput1) return;
  calculate();
  elInput2.textContent = result;
  elResult.textContent = "";
  despilayElInput2 = result;
  despilayElInput1 = "";
});
elAcDalet.addEventListener("click", clearAll);
function clearAll() {
  despilayElInput1 = "";
  despilayElInput2 = "";
  elInput1.innerHTML = despilayElInput1;
  elInput2.innerHTML = despilayElInput2;
  result = "";
}
