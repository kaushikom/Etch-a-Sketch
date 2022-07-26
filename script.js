const container = document.getElementById("container");
let input = 5;
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
generateGrid(10);
