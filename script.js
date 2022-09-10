function main() {
  let toggleTheme = document.getElementById("toggle-theme");
  let theme_style = document.getElementById("theme_style");
  let theme = theme_style.getAttribute("href").includes("light");



  toggleTheme.addEventListener("click", () => {
    theme = !theme;
    debugger;
    if (theme) {
      // light theme
      // switch stylesheet
      theme_style.href = theme_style.href.replace("dark", "light");

      // switch icon
      toggleTheme.querySelector("img").src = toggleTheme.querySelector("img").src.replace("half-moon", "sunny");

      // switch home link
      let home = document.querySelector(["[href*='index.html']"]);
      if (home) {
        home.href = home.href.replace("index.html", "index-light.html");
      }
      // switch links
      document.querySelectorAll("[href*='dark.html']").forEach((el) => {
        el.href = el.href.replace("dark", "light");
      });


    } else {
      // dark theme
      theme_style.href = theme_style.href.replace("light", "dark");
      toggleTheme.querySelector("img").src = toggleTheme.querySelector("img").src.replace("sunny", "half-moon");
      let home = document.querySelector(["[href*='index-light.html']"]);
      if (home) {
        home.href = home.href.replace("index-light.html", "index.html");
      }
      document.querySelectorAll("[href*='light.html']").forEach((el) => {
        el.href = el.href.replace("light", "dark");
      });
    }
  })
}
document.addEventListener("DOMContentLoaded", main);