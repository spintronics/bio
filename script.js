function main() {
  let stylesheetElement = document.getElementById("theme_style");
  let theme = stylesheetElement.getAttribute("href").includes("light");



  toggleTheme.addEventListener("click", () => {

    theme = !theme;

    if (theme) {
      // light theme
      // switch stylesheet
      stylesheetElement.href = stylesheetElement.href.replace("dark", "light");

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
      stylesheetElement.href = stylesheetElement.href.replace("light", "dark");

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