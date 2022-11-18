const inputs = Array.from(document.getElementsByTagName("input"));
const refocus = [0, 0, 0, 0, 0, 0];

inputs.forEach((inp) => {
  let i = inputs.indexOf(inp);
  inp.addEventListener("click", () => (refocus[i] = 1));
});

document.body.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    if (
      inputs[i] !== document.activeElement &&
      !inputs[i].checkValidity() &&
      refocus[i] === 1
    ) {
      inputs[i].classList.add("error");
    } else {
      inputs[i].classList.remove("error");
    }
  }
});
