// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const themeToggleBtn = document.getElementById("theme-toggle");

  // Check localStorage for a saved theme; apply dark mode if set
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    // Save the user's theme choice in localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
