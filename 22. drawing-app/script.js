// using canvas API in html5
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  // in console it will show where you pressed down in the canvas
  // console.log(isPressed, x, y)
});

// will need to clear the values for mousedown
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  // checking to see if it works
  // console.log(isPressed, x, y)
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
    // console.log(x2, y2)
  }
});

// FUNCTION
// x and y for the positioning of drawing shapes
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  //   fixed the line with * 2
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// will show a black circle that's 100 on the x axis and 200 down the y axis within the canvas
// drawCircle(100, 200)
// drawLine(300, 200, 100, 300)

// TOOLBOX CONTROLS
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

// FUNCTION
function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  // append 5
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  // append 5
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

// changing the color
colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

// being able to clear the canvas
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
