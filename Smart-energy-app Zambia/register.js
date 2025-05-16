function register() {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Save to localStorage
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[email]) {
    alert("This email is already registered.");
    return;
  }

  users[email] = { password };
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful. Please log in.");
  window.location.href = "index.html";
}
