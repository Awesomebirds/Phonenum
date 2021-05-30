const slider = document.querySelector(".slider");
const number = document.querySelector(".number");

String.prototype.fillZero = function (width) {
  return this.length >= width
    ? this
    : new Array(width - this.length + 1).join("0") + this; //남는 길이만큼 0으로 채움
};

let value = slider.value.fillZero(8);
number.innerHTML = "010" + value;

slider.oninput = function () {
  number.innerHTML = "010" + this.value.fillZero(8);
};
