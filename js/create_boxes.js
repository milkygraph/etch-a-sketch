const grid_size = 16
const grid = document.querySelector('.grid');

let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

function changeColor(target) {
  target.style.backgroundColor = 'black';
}

function clickBox(e) {
  if (e.type === 'mouseover' && mouseDown) {
    changeColor(e.target);
  } else if (e.type === 'mousedown') {
    changeColor(e.target);
  }
}

function createBoxes(grid_size) {
  const num_boxes = grid_size * grid_size;
  for (let i = 0; i < num_boxes; i++) {
    const box = document.createElement('div');
    box.addEventListener('mouseover', clickBox);
    box.addEventListener('mousedown', clickBox);
    box.classList.add('box');
    grid.appendChild(box);
  }
}

function updateGridContainer(grid_size) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
}

// GRID SIZE SLIDER
const slider = document.getElementById("grid-size-slider");
const slider_label = document.getElementById("grid-size-value");

slider.addEventListener("input", () => {
  grid.innerHTML = '';
  updateGridContainer(slider.value);
  createBoxes(slider.value);
  slider_label.innerText = slider.value;
});

createBoxes(slider.value);
