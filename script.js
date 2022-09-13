function setSkillProgress(element) {
  if (!element) return;

  let aptitude = element.getAttribute("aptitude");

  if (!aptitude) return;

  let indicator = element.querySelector(".skill-indicator");

  if (!indicator) return;

  indicator.style.transition = `all ${.2 * aptitude}s ease-in-out`;

  indicator.style.width = aptitude * 10 + "%";

  indicator.style.backgroundColor = `rgb(${255 - aptitude * 25}, ${aptitude * 25}, 0)`;
  indicator.style.opacity = 1;
}

function bindListeners() {
  let stylesheetElement = document.getElementById("theme_style");
  let theme = stylesheetElement.getAttribute("href").includes("light");
  let toggleThemeButtons = document.getElementsByClassName("toggle-theme");
  let menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("active");
  });



  Array.from(toggleThemeButtons).forEach(toggleThemeButton => {

    toggleThemeButton.addEventListener("click", () => {

      theme = !theme;

      if (theme) {
        // light theme
        // switch stylesheet
        stylesheetElement.href = stylesheetElement.href.replace("dark", "light");

        // switch icon
        Array.from(toggleThemeButtons).forEach(button => {
          button.querySelector("img").src = toggleThemeButton.querySelector("img").src.replace("sunny", "half-moon");
        });

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

        Array.from(toggleThemeButtons).forEach(button => {
          button.querySelector("img").src = toggleThemeButton.querySelector("img").src.replace("half-moon", "sunny");
        });

        let home = document.querySelector(["[href*='index-light.html']"]);
        if (home) {
          home.href = home.href.replace("index-light.html", "index.html");
        }

        document.querySelectorAll("[href*='light.html']").forEach((el) => {
          el.href = el.href.replace("light", "dark");
        });
      }
    })
  })
}


function main() {
  bindListeners();

  document.querySelectorAll(".skill").forEach(setSkillProgress);
}

document.addEventListener("DOMContentLoaded", main);