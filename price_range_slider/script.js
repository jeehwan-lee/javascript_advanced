const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".slider .progress");

rangeInput.forEach((input) => {
  input.addEventListener("input", () => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
  });
});
