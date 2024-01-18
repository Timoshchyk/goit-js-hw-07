const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const formData = {
        email,
        password,
    };
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        console.log(formData);
        form.reset();
    }
}