function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function changeBackgroundColor(elementClass) {
  var elements = document.getElementsByClassName(elementClass);
  for (let i = 0; i < elements.length; i++) {
    if (isCSSColor) {
      elements[i].style.backgroundColor = "rgb(173, 216, 230)";
    } else {
      elements[i].style.backgroundColor = "";
    }
  }
}

var isCSSColor = true;

function changeBackground() {
  var cardElements = document.getElementsByClassName("card");
  var buttonCardElements = document.getElementsByClassName("button");
  var pElements = document.getElementsByClassName("homeP");

  var buttonScroll = document.getElementById("ButtonHidden1");
  var buttonScroll2 = document.getElementById("ButtonHidden2");
  var buttonScroll3 = document.getElementById("ButtonHidden3");
  var buttonScroll4 = document.getElementById("ButtonHidden4");

  const listItems = document.getElementsByClassName("List");

  for (let i = 0; i < listItems.length; i++) {
    const liElements = listItems[i].getElementsByTagName("li");
    for (let j = 0; j < liElements.length; j++) {
      liElements[j].style.color = isCSSColor ? "lightblue" : "";
    }
  }

  changeBackgroundColor("buttonCard");

  for (let i = 0; i < cardElements.length; i++) {
    cardElements[i].style.backgroundColor = isCSSColor ? "rgb(115, 203, 233)" : "";
  }

  for (let i = 0; i < buttonCardElements.length; i++) {
    buttonCardElements[i].style.backgroundColor = isCSSColor ? "rgb(173, 216, 230)" : "";
  }

  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.backgroundColor = isCSSColor ? "rgb(115, 216, 230)" : "";
  }

  buttonScroll.style.backgroundColor = isCSSColor ? "rgb(115, 203, 233)" : "";
  buttonScroll2.style.backgroundColor = isCSSColor ? "rgb(115, 203, 233)" : "";
  buttonScroll3.style.backgroundColor = isCSSColor ? "rgb(115, 203, 233)" : "";
  buttonScroll4.style.backgroundColor = isCSSColor ? "rgb(115, 203, 233)" : "";

  isCSSColor = !isCSSColor;
}

let currentImage = 1;

function toggleImage(img) {
    const overlay = document.getElementById('overlay');
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = img.src; // Set the source of the fullscreen image
    overlay.style.display = "flex"; // Show the overlay
}

function closeImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = "none"; // Close the overlay
}

function switchImages() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');

    if (currentImage === 1) {
        img1.style.opacity = "0"; // Fade out first image
        setTimeout(() => {
            img1.style.display = "none"; // Hide first image after fade out
            img2.style.display = "block"; // Show second image
            setTimeout(() => {
                img2.style.opacity = "1"; // Fade in second image
            }, 50); // Small timeout to ensure display change is processed
        }, 500); // Match timeout with CSS transition duration
        currentImage = 2;
    } else {
        img2.style.opacity = "0"; // Fade out second image
        setTimeout(() => {
            img2.style.display = "none"; // Hide second image after fade out
            img1.style.display = "block"; // Show first image
            setTimeout(() => {
                img1.style.opacity = "1"; // Fade in first image
            }, 50); // Small timeout to ensure display change is processed
        }, 500); // Match timeout with CSS transition duration
        currentImage = 1;
    }
}

setInterval(switchImages, 5000);