const container = document.getElementById("container");
let input = 10;
let grid10 = document.getElementById("10");
let grid15 = document.getElementById("15");
let grid20 = document.getElementById("20");
let reset = document.getElementById("reset");

let black = document.getElementById("black");
let grey = document.getElementById("grey");
let rainbow = document.getElementById("rainbow");
let random = document.getElementById("random");
let color = "black";
random.addEventListener("click", (e) => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  color = `rgb(${r},${g},${b})`;
});
black.addEventListener("click", () => (color = "black"));
grey.addEventListener("click", () => (color = "white"));

function generateGrid(input) {
  for (let i = 0; i < input * input; i++) {
    let side = 500 / input;
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.height = `${side}px`;
    pixel.style.width = `${side}px`;
    container.appendChild(pixel);
    console.log("pixel created");
  }
}
function removeGrid(input) {
  for (let i = 0; i < input * input; i++) {
    let pixel = document.querySelector("#container .pixel");
    container.removeChild(pixel);
  }
}
generateGrid(input);

grid10.addEventListener("click", (e) => {
  removeGrid(input);
  generateGrid(e.target.id);
  input = 10;
});
grid15.addEventListener("click", (e) => {
  removeGrid(input);
  generateGrid(e.target.id);
  input = 15;
});
grid20.addEventListener("click", (e) => {
  removeGrid(input);
  generateGrid(e.target.id);
  input = 20;
});
reset.addEventListener("click", (e) => {
  removeGrid(input);
  generateGrid(input);
});
rainbow.addEventListener("click", () => (color = "rainbow"));
container.addEventListener("mouseover", (e) => {
  if (color === "rainbow") {
    console.log(1);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  } else {
    e.target.style.backgroundColor = `${color}`;
  }
});
