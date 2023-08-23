const overlay = document.getElementById("overlay");
const togglenavbar = document.getElementById("togglenavbar");
const middleDiv = document.querySelector(".middle-div");
const toggleButton = document.querySelector(".navbar-toggler");

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

window.addEventListener(
  "resize",
  function (event) {
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
