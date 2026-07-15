import { register } from "./auth.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm-password").value;

  if (password !== confirm_password) {
    alert("Password and confirm password must match!");
    return;
  }

  if (await register(email, password, username)) {
    location.reload();
  }
});
