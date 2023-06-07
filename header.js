const wrapper = document.querySelector(".wrap");

const markup = `
<div class="header-container">
  <a href=""><img src="./img/logo.svg.svg" alt=""></a>
  <button type="button" class="js-open-menu">Menu</button>
  
  
  <div class="toggle-switch">
    <div class="moon-icon"></div>
    <div class="toggle-circle"><img src="./img/elipse.svg.svg" alt=""></div>
    <div class="sun-icon"></div>
  </div>
</div>

<div class="menu-container js-menu-container is-hidden">
  <div class="menu-header">
    <a href=""><img src="./img/logo.svg.svg" alt=""></a>
    <div class="menu-nav">
      <nav>
      <ul class="list">
        <li><a href="./index.html" id="home-link">Home</a></li>
        <li><a href="./catalog.html" id="catalog-link">Catalog</a></li>
        <li><a href="./library.html" id="library-link">My library</a></li>
      </ul>
    </nav>
    </div>
  </div>
</div>

<div class="js-menu-backdrop"></div>
`;

wrapper.insertAdjacentHTML("afterbegin", markup);

// Отримання URL поточної сторінки
const currentUrl = window.location.href;

// Отримання елементів посилань
const homeLink = document.getElementById("home-link");
const catalogLink = document.getElementById("catalog-link");
const libraryLink = document.getElementById("library-link");

// Встановлення класу активного посилання залежно від поточної сторінки
if (currentUrl.includes("index.html")) {
  homeLink.classList.add("active");
} else if (currentUrl.includes("catalog.html")) {
  catalogLink.classList.add("active");
} else if (currentUrl.includes("library.html")) {
  libraryLink.classList.add("active");
}

const toggleSwitch = document.querySelector(".toggle-switch");
const toggleCircle = document.querySelector(".toggle-circle");
const menuContainer = document.querySelector(".js-menu-container");
const menuButton = document.querySelector(".js-open-menu");

const savedColorMode = localStorage.getItem("colorMode");
if (savedColorMode) {
  document.documentElement.setAttribute("data-color-mode", savedColorMode);
  toggleCircle.style.transform =
    savedColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
  document.body.dataset.colorMode = savedColorMode;
  updateMenuColor(savedColorMode);
}

toggleSwitch.addEventListener("click", function () {
  const currentColorMode =
    document.documentElement.getAttribute("data-color-mode");
  const newColorMode = currentColorMode === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-color-mode", newColorMode);
  toggleCircle.style.transform =
    newColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
  document.body.dataset.colorMode = newColorMode;
  updateMenuColor(newColorMode);

  localStorage.setItem("colorMode", newColorMode);
});

function updateMenuColor(colorMode) {
  if (colorMode === "dark") {
    menuContainer.style.backgroundColor = "#171717";
    menuButton.style.color = "#B7B7B7";
  } else {
    menuContainer.style.backgroundColor = "#F8F8F8";
    menuButton.style.color = "#595959";
  }
}

const menuButtonEl = document.querySelector(".js-open-menu");
const menuContainerEl = document.querySelector(".js-menu-container");
const menuBackdrop = document.querySelector(".js-menu-backdrop");

menuButtonEl.addEventListener("click", function (e) {
  menuContainerEl.classList.toggle("is-visible");
});

menuBackdrop.addEventListener("click", function (e) {
  if (e.target === menuBackdrop) {
    menuContainerEl.classList.remove("is-visible");
  }
});
