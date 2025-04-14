document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Check saved theme preference in localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.src = "assets/images/moon.svg";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "assets/images/moon.svg";
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.src = "assets/images/sun.svg";
      localStorage.setItem("theme", "light");
    }
  });
});
