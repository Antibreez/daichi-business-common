import Inputmask from "inputmask";

const inputs = document.querySelectorAll("input.phone");

console.log(inputs.length);

const im = new Inputmask("+7(999) 999-99-99");

inputs.forEach((item) => {
  im.mask(item);
});
