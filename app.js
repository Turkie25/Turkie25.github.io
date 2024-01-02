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

  const listItems1 = document
    .getElementById("List1")
    .getElementsByTagName("li");
  const listItems2 = document
    .getElementById("List2")
    .getElementsByTagName("li");

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

  for (let i = 0; i < listItems1.length; i++) {
    listItems1[i].style.color = isCSSColor ? "lightblue" : "";
  }

  for (let i = 0; i < listItems2.length; i++) {
    listItems2[i].style.color = isCSSColor ? "lightblue" : "";
  }

  isCSSColor = !isCSSColor;
}
