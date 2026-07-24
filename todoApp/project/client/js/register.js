if (isLoggedIn()) {
    window.location.href = "todo.html";
}

const registerForm = document.getElementById("registerForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const registerError = document.getElementById("registerError");
const registerSuccess = document.getElementById("registerSuccess");

const registerBtn = document.getElementById("registerBtn");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    registerBtn.disabled = true;
    registerBtn.textContent = "Registering...";

    registerError.classList.add("d-none");
    registerSuccess.classList.add("d-none");

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        registerError.textContent = "Please fill in all fields.";
        registerError.classList.remove("d-none");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        registerError.textContent = "Please enter a valid email address.";
        registerError.classList.remove("d-none");
        return;
    }

    if (passwordValue.length < 6) {
        registerError.textContent = "Password must be at least 6 characters.";
        registerError.classList.remove("d-none");
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        registerError.textContent = "Passwords do not match.";
        registerError.classList.remove("d-none");
        return;
    }

    registerSuccess.textContent = "Validation passed.";
    registerSuccess.classList.remove("d-none");

    registerBtn.disabled = false;
    registerBtn.textContent = "Register";
    // Backend gelende fetch() burada olacaq.

});