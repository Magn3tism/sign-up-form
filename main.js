const inputs = Array.from(document.getElementsByTagName("input"));
const refocus = [0, 0, 0, 0, 0, 0];

const create = document.getElementById("create");
const errorTexts = Array.from(document.getElementsByClassName("error-text"));

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

inputs.forEach((inp) =>
  inp.addEventListener(
    "input",
    () => (errorTexts[inputs.indexOf(inp)].textContent = "")
  )
);

create.addEventListener("click", () => {
  inputs.forEach((inp) => {
    if (inp.value.trim() === "") {
      errorTexts[inputs.indexOf(inp)].textContent = "Field cannot be empty.";
    }
  });

  if (inputs[2].validity.typeMismatch) {
    errorTexts[2].textContent = "Email must be in the pattern name@example.com";
  }

  if (inputs[3].validity.badInput) {
    errorTexts[3].textContent = "Phone Number must be a numbr";
  }

  if (inputs[4].value !== inputs[5].value) {
    errorTexts[4].textContent = "Password and Cofirmation don't match";
  }
});
