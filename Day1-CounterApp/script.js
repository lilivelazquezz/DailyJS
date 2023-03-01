const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    console.log("Add");
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    console.log("Reset");
    count.innerHTML = 0;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    console.log("Subtract");
    count.innerHTML--;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "turquoise";
  } else if (count.innerHTML < 0) {
    count.style.color = "hotpink";
  } else {
    count.style.color = "gray";
  }
}
