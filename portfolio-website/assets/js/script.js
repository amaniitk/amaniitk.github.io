document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Check saved theme preference in localStorage and update toggle state
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      // Switch to dark theme
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light theme
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
