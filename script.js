// Typing effect messages
const messages = [
  "You make me smile ❤️",
  "Thinking of you… 🌸",
  "Forever yours, Emma 🌟",
  "Just us, always 💕"
];

let i = 0;
let charIndex = 0;
let currentMessage = "";
const typingElement = document.getElementById("typing");

function typeMessage() {
  if (charIndex < messages[i].length) {
    currentMessage += messages[i].charAt(charIndex);
    typingElement.innerHTML = currentMessage;
    charIndex++;
    setTimeout(typeMessage, 100);
  } else {
    setTimeout(eraseMessage, 2000);
  }
}

function eraseMessage() {
  if (charIndex > 0) {
    currentMessage = currentMessage.slice(0, -1);
    typingElement.innerHTML = currentMessage;
    charIndex--;
    setTimeout(eraseMessage, 50);
  } else {
    i = (i + 1) % messages.length;
    setTimeout(typeMessage, 500);
  }
}

typeMessage();

// Floating hearts and petals
const effects = document.getElementById("effects");
const symbols = ["❤️", "💖", "🌸", "🌹"];

function createEffect() {
  const span = document.createElement("span");
  span.className = Math.random() > 0.5 ? "heart" : "petal";
  span.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = window.innerHeight + "px";
  effects.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 8000);
}
setInterval(createEffect, 800);

// Easter Egg
const easterEgg = document.getElementById("easter-egg");
setTimeout(() => {
  easterEgg.style.display = "block";
}, 10000);

easterEgg.addEventListener("click", () => {
  alert("💌 Surprise, Emma! You are loved 💕");
});
