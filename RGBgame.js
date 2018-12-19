let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    for (let i = 0; i < squares.length; i++) {
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    }
  });
}
