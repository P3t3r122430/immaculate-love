// Messages that fade in/out
const messages = [
  "You are the most beautiful part of my world 🌹",
  "Every moment with you feels magical ✨",
  "Your smile is my sunshine ☀️",
  "Forever yours ❤️"
];

let msgIndex = 0;
const msgElement = document.getElementById("changing-message");

function showMessage() {
  msgElement.style.opacity = 0; // fade out
  setTimeout(() => {
    msgElement.textContent = messages[msgIndex];
    msgElement.style.opacity = 1; // fade in
    msgIndex = (msgIndex + 1) % messages.length;
  }, 1500);
}

setInterval(showMessage, 4000);
showMessage();

// Falling roses
function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.style.left = Math.random() * window.innerWidth + "px";
  rose.style.animationDuration = 5 + Math.random() * 5 + "s"; 
  document.getElementById("roses").appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 10000);
}

setInterval(createRose, 500);

// Hidden notification on load
window.onload = function() {
  document.getElementById("notifyForm").submit();
};
