let container = document.querySelector(".container");
let gridButton = document.querySelector("#submit-grid");
let clearGridButton = document.querySelector("#clear-grid");
let gridWidth = document.querySelector("#width-range");
let gridHeight = document.querySelector("#height-range");
let colorButton = document.querySelector("#color-input");
let earseBtn = document.querySelector("#erase-btn");
let paintBtn = document.querySelector("#paint-btn");
let widthValue = document.querySelector("#width-value");
let heightVlue = document.querySelector("#height-value");


let events = {
  mouse: {
    down: "mousedown",
    move: "moisemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    mobe: "touchmove",
    up: "touchend"
  }
}

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  }
  catch(e) {
    deviceType = "mouse";
    return false;
  }
}

isTouchDevice();
gridButton.addEventListener("click", () => {
  container.innerHTML = "";
  let count = 0;
  for(let i=0; i<gridHeight.value; i++) {
    count += 2;
    let div = document.createEvent("div");
  }
})