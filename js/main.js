const overlay = document.getElementById("overlay");
const togglenavbar = document.getElementById("togglenavbar");
const middleDiv = document.querySelector(".middle-div");
const toggleButton = document.querySelector(".navbar-toggler");

function updateToggleButtonDisplay() {
  if (window.innerWidth > 768) {
    toggleButton.style.display = "none";
  } else {
    toggleButton.style.display = "flex";
  }
}

let start = () => {
  middleDiv.classList.add("active");

  if (window.innerWidth <= 768) {
    togglenavbar.style.left = "-300px";
    overlay.style.display = "none";
    toggleButton.style.display = "none";
  }
};

let end = () => {
  middleDiv.classList.remove("active");

  if (window.innerWidth <= 768) {
    togglenavbar.style.left = "0";
    overlay.style.display = "block";
    toggleButton.style.display = "flex";
  }
};

console.log(toggleButton, "tog");

let isNavbarOpen = false;

toggleButton.addEventListener("click", () => {
  if (isNavbarOpen) {
    togglenavbar.style.left = "-300px";
    overlay.style.display = "none";
    toggleButton.classList.remove("open");
  } else {
    togglenavbar.style.left = "0";
    overlay.style.display = "block";
    toggleButton.classList.add("open");
  }

  isNavbarOpen = !isNavbarOpen;
});

overlay.addEventListener("click", () => {
  togglenavbar.style.left = "-300px";
  overlay.style.display = "none";
  toggleButton.classList.remove("open");
});

$(document).ready(function () {
  updateToggleButtonDisplay();
  $("#openMiddleDivBtn").click(function () {
    $(".middle-div").toggleClass("active");
  });
});
