// import fetchFilms from './fetchFilms'

// const toggleSwitch = document.querySelector(".toggle-switch");
// const toggleCircle = document.querySelector(".toggle-circle");
// const span = document.querySelector('.span')

// const savedColorMode = localStorage.getItem("colorMode");
// if (savedColorMode) {
//   document.documentElement.setAttribute("data-color-mode", savedColorMode);
//   toggleCircle.style.transform =
//     savedColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
//   document.body.dataset.colorMode = savedColorMode;
//   // updateTextColor(savedColorMode);
// }

// toggleSwitch.addEventListener("click", function () {
//   const currentColorMode = document.documentElement.dataset.colorMode;
//   const newColorMode = currentColorMode === "light" ? "dark" : "light";

//   document.documentElement.setAttribute("data-color-mode", newColorMode);
//   toggleCircle.style.transform =
//     newColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
//   document.body.dataset.colorMode = newColorMode;
//   // updateTextColor(newColorMode);

//   // Збереження інформації про кольоровий режим у локальне сховище
//   localStorage.setItem("colorMode", newColorMode);
// });



///////////poryadok togggle znizu

// const toggleSwitch = document.querySelector(".toggle-switch");
// const toggleCircle = document.querySelector(".toggle-circle");
// const span = document.querySelector(".span");
// const menuContainer = document.querySelector(".js-menu-container");
// const menuButton = document.querySelector(".js-open-menu");

// const savedColorMode = localStorage.getItem("colorMode");
// if (savedColorMode) {
//   document.documentElement.setAttribute("data-color-mode", savedColorMode);
//   toggleCircle.style.transform =
//     savedColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
//   document.body.dataset.colorMode = savedColorMode;
//   updateMenuColor(savedColorMode);
// }

// toggleSwitch.addEventListener("click", function () {
//   const currentColorMode = document.documentElement.dataset.colorMode;
//   const newColorMode = currentColorMode === "light" ? "dark" : "light";

//   document.documentElement.setAttribute("data-color-mode", newColorMode);
//   toggleCircle.style.transform =
//     newColorMode === "dark" ? "translateX(36px)" : "translateX(0)";
//   document.body.dataset.colorMode = newColorMode;
//   updateMenuColor(newColorMode);

//   localStorage.setItem("colorMode", newColorMode);
// });

// function updateMenuColor(colorMode) {
//   if (colorMode === "dark") {
//     menuContainer.style.backgroundColor = "#171717";
//     menuButton.style.color = "#B7B7B7";
    
//   } else {
//     menuContainer.style.backgroundColor = "#F8F8F8";
//     menuButton.style.color = "#595959";
//   }
// }

// function updateTextColor(colorMode) {
//   if (colorMode === "dark") {
//     span.style.color = "white";
//   } else {
//     span.style.color = "black";
//   }
// }




// const BASE_URL = "https://api.themoviedb.org/3";
// const END_POINT = "/trending/movie/week";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// const list = document.querySelector(".js-list");

// async function serviceAPI() {
//   const response = await fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`);
//   const data = await response.json();
//   console.log(data);
// }


//  async function serviceMovie(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }

// serviceMovie()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     // if (data.total_pages > data.page) {
//     //   observer.observe(guard);
//     // }
//   })
//   .catch((error) => console.log(error));


// async function serviceMovie() {
//   try {
//     const response = await fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`);
//     if (!response.ok) {
//       throw new Error (response.statusText)
//     }
//     const data = response.json();
//     return data;
//   }
//   catch (err){
//     console.log(err);
//   }
// }
  
// serviceMovie()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//   })
//   .catch((error) => console.log(error));


// function createMarkup(arr) {
//   return arr
//     .map(({ original_title, poster_path, vote_average }) => {
//       return `<div class='card'>
//   <li class='card-item'>
//     <div class='image-container'>
//       <div class='image-wrap'>
//         <div class="blur-overlay"></div>
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" class='cards' alt="${original_title}">
//       </div>
//       <div class='text-wrap'>
//         <h2>${original_title}</h2>
//         <p class='rating-box'>${vote_average}</p>
//       </div>
//     </div>
//   </li>
// </div>`;
//     })
//     .join("");
// }




//
// const openMenuEl = document.querySelector(".js-open-menu");
// const menuEl = document.querySelector(".js-menu-container");
// openMenuEl.addEventListener('click', onMenuOpen)

// function onMenuOpen(e) {
//   e.prventDefault();
// menuEl.classList.remove('is-hidden')
// }


// const menuButton = document.querySelector(".js-open-menu");
// const menuContainer = document.querySelector(".js-menu-container");
// const menuBackdrop = document.querySelector(".js-menu-backdrop");

// menuButton.addEventListener("click", function () {
//   menuContainer.classList.toggle("is-visible");
// });



// menuBackdrop.addEventListener('click',onBackdropClick)

// function onBackdropClick(e) {
//   e.preventDefault()
//   if ( e.currentTarget !== menuContainer) {
//     menuContainer.classList.remove("is-visible");
//   }
// }

// const menuButton = document.querySelector(".js-open-menu");
const menuContainerEl = document.querySelector(".js-menu-container");
const menuBackdrop = document.querySelector(".js-menu-backdrop");

menuButton.addEventListener("click", function (e) {
  // e.stopPropagation();
  menuContainerEl.classList.toggle("is-visible");
});

// menuContainerEl.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

menuBackdrop.addEventListener('click', onBackdropClick)

function onBackdropClick(e) {
  e.preventDefault()
  if (e.currentTarget === menuBackdrop) {
    menuContainerEl.classList.remove("is-visible");
  }
}





// рарарар


