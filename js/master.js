let el = document.querySelector(".scroller");
let up = document.querySelector(".up");
let box = document.querySelector(".settings-box");
let gear = document.querySelector(".toggle-settings .fa-gear");
let colors = document.querySelectorAll(".colors-list li");
const colorLi = document.querySelectorAll(".colors-list li");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

window.addEventListener("scroll", function () {
  this.scrollY >= 900 ? up.classList.add("show") : up.classList.remove("show");
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color-option");

if (mainColor) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // Remove Active Class From All Children's
  colors.forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data Color === Local Storage Item
    if (element.dataset.color === mainColor) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

function addClass() {
  box.classList.toggle("open");
  this.classList.toggle("fa-spin");
}

gear.onclick = addClass;

// Loop On All List Items
colorLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Local Storage
    localStorage.setItem("color-option", e.target.dataset.color);

    handleActive(e);
  });
});

let links = document.querySelectorAll(".links a");

// Loop On All List Items
links.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Remove Active Class From All children's
    links.forEach((otherLi) => {
      otherLi.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// a
let landingPage = document.querySelector(".landing-page");

// a
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  //
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  //
  landingPage.style.backgroundImage = `url("/images/${imgsArray[randomNumber]}")`;
}, 10000);

// Select Skills Selector
let ourSkills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill-progress span");

// On Scroll Function
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = "popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = "popup-box";

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.classList.add("close-button");

    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", (e) => {
  if (e.target.className === "close-button") {
    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSection() {
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollToSection(allLinks);

// Handle Active State
function handleActive(ev) {
  // Remove Active Class From All children's
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On Self
  ev.target.classList.add("active");
}

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

// Click Anywhere Outside Menu And Toggle Button
toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    // Check If Menu
    if (tLinks.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");
    }
  }
  tLinks.onclick = function () {
    e.stopPropagation();
  };
});

/*
// Click Anywhere Outside Menu And Remove Button
document.querySelector(".overlay").addEventListener("click", () => {
  // Remove Class "menu-active" On Button
  toggleBtn.classList.remove("menu-active");

  // Remove Class "open" On Links
  tLinks.classList.remove("open");
});
*/
