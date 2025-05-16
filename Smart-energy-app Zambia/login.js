function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[email]) {
    alert("This email is not registered. Please sign up first.");
    return;
  }

  if (users[email].password !== password) {
    alert("Incorrect password. Please try again.");
    return;
  }

  // Store current session
  localStorage.setItem("user", email);
  window.location.href = "home.html";
}
