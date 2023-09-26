const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => box.style.backgroundColor = "white");
});
