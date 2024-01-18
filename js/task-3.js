const input = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");
input.addEventListener("input", onInputBlur);
function onInputEvent(event) {
    const name = input.value.trim();
    if (name === "") {
        greeting.textContent = "Anonymous";
    } else {
        greeting.textContent = name;
    }
}
