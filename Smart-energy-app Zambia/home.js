document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  if (!user) {
    alert("You must be logged in to view this page.");
    window.location.href = "index.html";
  }
});
