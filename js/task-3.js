const input = document.querySelector("#name-input");
const dreeting = document.querySelector("#name-output");
input.addEventListener("input", onInputBlur);
function onInputBlur(event) {
    const name = input.ariaValue.trim();
    if (name === "") {
        greeting.textContent = "Anonymous";
    } else {
        greeting.textContent = name;
    }
}
