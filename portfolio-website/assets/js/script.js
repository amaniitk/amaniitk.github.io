document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Check saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true; // The checkbox is "on" for dark theme
  }

  // Listen for slider toggle
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      // Switch to dark
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
