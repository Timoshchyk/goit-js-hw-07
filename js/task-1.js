const liElem = document.querySelectorAll(".item");
const liLength = liElem.length;
console.log(`Number of categories: ${liLength}`);
const liMessage = liElem.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Element: ${element.children[1].children.length}`);
});