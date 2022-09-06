function main() {
  let toggleTheme = document.getElementById("toggle-theme");
  let theme = 0;
  let root = document.documentElement;



  toggleTheme.addEventListener("click", () => {
    theme = !theme;
    if (theme) {
      // light theme
      root.style.setProperty("--header-background", "#fff");
      root.style.setProperty("--header-text", "#000");
      root.style.setProperty("--background1", "#F7F3F5");
      root.style.setProperty("--background2", "#EFF7FF");
      root.style.setProperty("--text", "#000");

      toggleTheme.querySelector("img").src = "/assets/icons/sunny.png";
    } else {
      // dark theme
      root.style.setProperty('--header-background', '#161b22');
      root.style.setProperty('--header-text', '#f0f6fc');
      root.style.setProperty('--background1', '#0d1117');
      root.style.setProperty('--text', '#c9d1d9');
      root.style.setProperty('--background2', '#010409');
      toggleTheme.querySelector("img").src = "/assets/icons/half-moon.png";
    }
  })
}
document.addEventListener("DOMContentLoaded", main);