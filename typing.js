const text = "Furkan Öztürk";
const typingDelay = 100; // Delay between each character (in milliseconds)

let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  const currentText = text.substring(0, charIndex + 1);
  typingText.textContent = currentText;
  charIndex++;
  if (charIndex === text.length) {
    return;
  }
  setTimeout(type, typingDelay);
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
