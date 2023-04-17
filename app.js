function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function scrollToSection() {
  let section = document.getElementById("Section2");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection3() {
  let section = document.getElementById("Section3");
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection4() {
  let section = document.getElementById("Section4");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection5() {
  let section = document.getElementById("Section5");
  section.scrollIntoView({ behavior: "smooth" });
}

var isCSSColor = true;

function changeBackground() {
  var card = document.getElementById("card");
  var card1 = document.getElementById("card1");

  var buttonCard = document.getElementById("buttonCard");
  var buttonCard1 = document.getElementById("buttonCard1");

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

  if (isCSSColor) {
    card.style.backgroundColor = "rgb(115, 203, 233)";
    card1.style.backgroundColor = "rgb(115, 203, 233)";
    buttonCard.style.backgroundColor = "rgb(173, 216, 230)";
    buttonCard1.style.backgroundColor = "rgb(173, 216, 230)";

    buttonScroll.style.backgroundColor = "rgb(115, 203, 233)";
    buttonScroll2.style.backgroundColor = "rgb(115, 203, 233)";
    buttonScroll3.style.backgroundColor = "rgb(115, 203, 233)";
    buttonScroll4.style.backgroundColor = "rgb(115, 203, 233)";

    for (let i = 0; i < listItems1.length; i++) {
      listItems1[i].style.color = "lightblue";
    }

    for (let i = 0; i < listItems2.length; i++) {
      listItems2[i].style.color = "lightblue";
    }

    isCSSColor = false;
  } else {
    card.style.backgroundColor = "";
    card1.style.backgroundColor = "";
    buttonCard.style.backgroundColor = "";
    buttonCard1.style.backgroundColor = "";

    buttonScroll.style.backgroundColor = "";
    buttonScroll2.style.backgroundColor = "";
    buttonScroll3.style.backgroundColor = "";
    buttonScroll4.style.backgroundColor = "";

    for (let i = 0; i < listItems1.length; i++) {
      listItems1[i].style.color = "";
    }

    for (let i = 0; i < listItems2.length; i++) {
      listItems2[i].style.color = "";
    }

    isCSSColor = true;
  }
}
