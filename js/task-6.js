function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxElem = document.querySelector("#boxes");
createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
const beginningWidth = 30;
const beginningHeigth = 30;
function onCreateBtnClick() {
  onDestroyBtnClick();
  let width = beginningWidth;
  let heigth = beginningHeigth;
  let arr = [];
  const number = +inputNumber.value;
  if (number >= 1 && number <= 100) {
    for (let i = 1; i <= number; i++) {
      arr.push(
        `<div style="width: ${width}px; heigth: ${heigth}px; background-color: ${getRandomHexColor()}"></div>`
      );
      width +=10;
      heigth += 10;
    }
  }
  boxElem.insertAdjacentHTML("afterbegin", arr.join(""));
}
function onDestroyBtnClick(){
  while (boxElem.firstChild){
    boxElem.removeChild(boxElem.firstChild);
  }
}