function updateTimeDate() {
  let now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}
let clickSound = new Audio("click.mp3");
updateTimeDate();
setInterval(updateTimeDate, 1000);

const display = document.getElementById("display");
const buttons = document.querySelectorAll("ul li");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
    let value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      if (value === "x") value = "*";
      if (value === "÷") value = "/";
      display.value += value;
    }
  });
});
