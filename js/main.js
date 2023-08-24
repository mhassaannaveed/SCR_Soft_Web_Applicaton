const overlay = document.getElementById("overlay");
const togglenavbar = document.getElementById("togglenavbar");
const middleDiv = document.querySelector(".middle-div");
const toggleButton = document.querySelector(".navbar-toggler");

<<<<<<< HEAD
=======
let isNavbarOpen = false;

function updateToggleButtonDisplay() {
  console.count("rin");
  if (window.innerWidth <= 768) {
    toggleButton.style.display = "flex";

    isNavbarOpen = false;
  } else {
    toggleButton.style.display = "none";
    togglenavbar.style.left = "-300px";
    overlay.style.display = "none";
    toggleButton.classList.remove("open");
  }
}

>>>>>>> 13ea2c9ebe59cabfe0f64c073e642884a1d77c4d
let start = () => {
  middleDiv.classList.add("active");
  togglenavbar.style.left = "-300px";
  overlay.style.display = "none";
  toggleButton.style.display = "none";
};

let end = () => {
  middleDiv.classList.remove("active");
  togglenavbar.style.left = "0";
  overlay.style.display = "block";
  toggleButton.style.display = "flex";
};

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
});

<<<<<<< HEAD
$(document).ready(function () {
  $("#openMiddleDivBtn").click(function () {
    $(".middle-div").toggleClass("active");
  });
});
=======
window.addEventListener(
  "resize",
  function () {
    console.log("resize");
    updateToggleButtonDisplay();

    if (window.innerWidth > 768) {
      isNavbarOpen = false;
      togglenavbar.style.left = "-300px";
      overlay.style.display = "none";
      toggleButton.classList.remove("open");
    }
  },
  true
);
>>>>>>> 13ea2c9ebe59cabfe0f64c073e642884a1d77c4d
