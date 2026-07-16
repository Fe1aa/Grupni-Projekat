import { resetPassword } from "./auth.js";

const form = document.getElementById("resetPasswordForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (await resetPassword(email)) {
    location.reload();
  }
});
