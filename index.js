const display = document.getElementById("input");
let buttons = Array.from(document.querySelectorAll(".gird-item"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.value = "";
        break;
      case "=":
        display.value = eval(display.value);
        break;
      default:
        display.value += e.target.innerText;
        break;
    }
  });
});
