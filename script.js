// Typing effect messages
const messages = [
  "You make me smile ❤️",
  "Thinking of you… 🌸",
  "Forever yours 🌟",
  "Just us, always 💕",
  "Every day with you feels special 🌹",
  "My heart beats for you 💖"
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
    setTimeout(typeMessage, 90);
  } else {
    setTimeout(eraseMessage, 2500);
  }
}

function eraseMessage() {
  if (charIndex > 0) {
    currentMessage = currentMessage.slice(0, -1);
    typingElement.innerHTML = currentMessage;
    charIndex--;
    setTimeout(eraseMessage, 40);
  } else {
    i = (i + 1) % messages.length;
    setTimeout(typeMessage, 700);
  }
}

typeMessage();

// Floating hearts, petals, roses
const effects = document.getElementById("effects");
const symbols = ["❤️", "💖", "🌸", "🌹"];

function createEffect() {
  const span = document.createElement("span");
  span.className = Math.random() > 0.5 ? "heart" : "petal";
  span.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = window.innerHeight + "px";
  span.style.fontSize = (20 + Math.random() * 20) + "px"; // random size
  effects.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 10000);
}
setInterval(createEffect, 600);

// Easter Egg
const easterEgg = document.getElementById("easter-egg");
setTimeout(() => {
  easterEgg.style.display = "block";
}, 12000);

easterEgg.addEventListener("click", () => {
  alert("💌 Surprise, Emma! You are deeply loved 💕");
});
