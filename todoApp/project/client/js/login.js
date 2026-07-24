if (isLoggedIn()) {
    window.location.href = "todo.html";
}

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginError = document.getElementById("loginError");
const loginSuccess = document.getElementById("loginSuccess");

const loginBtn = document.getElementById("loginBtn");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    loginBtn.disabled = true;
    loginBtn.textContent = "Logging in...";

    loginError.classList.add("d-none");
    loginSuccess.classList.add("d-none");

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        loginError.textContent = "Please fill in all fields.";
        loginError.classList.remove("d-none");
        localStorage.setItem("email", emailValue);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        loginError.textContent = "Please enter a valid email address.";
        loginError.classList.remove("d-none");
        return;
    }

    if (passwordValue.length < 6) {
        loginError.textContent = "Password must be at least 6 characters.";
        loginError.classList.remove("d-none");
        return;
    }

    loginSuccess.textContent = "Validation passed.";
    loginSuccess.classList.remove("d-none");

    loginBtn.disabled = false;
    loginBtn.textContent = "Login";

    // Backend gelende fetch() burada olacaq.
   
});