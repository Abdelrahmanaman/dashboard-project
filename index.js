let darkMode = localStorage.getItem("darkMode");
let toggleOn = localStorage.getItem("toggleOn");
const toggleSwitch = document.querySelector(".toggle");
const mainElement = document.querySelector("main");
const fonts = document.querySelectorAll(".fontss");
const containers = document.querySelectorAll(".container");
const numbers = document.querySelectorAll(".numbers");
const overviewContainer = document.querySelectorAll(".overview-container");
const footer = document.querySelector("footer");

toggleSwitch.addEventListener('click', function () {
  darkMode = localStorage.getItem("darkMode");
  toggleOn = localStorage.getItem("toggleOn");
  if (darkMode !== "enabled") {
    activateDarkMode();
    toggleSwitch.checked = true;
  } else {
    deactivateDarkMode();
    toggleSwitch.checked = false;
  }
});

// Function to set initial state of dark mode and toggle button
function initializeDarkMode() {
  if (toggleOn === "enabled") {
    activateDarkMode();
    toggleSwitch.checked = true;
  } else {
    deactivateDarkMode();
    toggleSwitch.checked = false;
  }
}

if (darkMode === "enabled") {
  initializeDarkMode();
} else {
  deactivateDarkMode();
}

function activateDarkMode() {
  localStorage.setItem("darkMode", "enabled");
  localStorage.setItem("toggleOn", "enabled");
  mainElement.classList.add("dark-mode");
  fonts.forEach(font => {
    font.classList.add("fonts-dark");
  });
  containers.forEach(container => {
    container.classList.add("darkmode-container");
  });
  numbers.forEach(number => {
    number.classList.add("dark-fonts-numbers");
  });
  overviewContainer.forEach(container => {
    container.classList.add("darkmode-container");
  });
  footer.classList.add("footer");
}

function deactivateDarkMode() {
  localStorage.setItem("darkMode", null);
  localStorage.setItem("toggleOn", "disabled");
  mainElement.classList.remove("dark-mode");
  fonts.forEach(font => {
    font.classList.remove("fonts-dark");
  });
  containers.forEach(container => {
    container.classList.remove("darkmode-container");
  });
  numbers.forEach(number => {
    number.classList.remove("dark-fonts-numbers");
  });
  overviewContainer.forEach(container => {
    container.classList.remove("darkmode-container");
  });
  footer.classList.remove("footer");
}
