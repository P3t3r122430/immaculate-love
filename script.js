// Messages that type out one by one
const messages = [
  "Hey love ❤️",
  "I’m lucky to have you in my life 💫",
  "You’re beautiful inside and out 💕",
  "Forever my person 🌹"
];

const typingText = document.querySelector(".typing-text");
let msgIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      typeEffect();
    }, 2000);
  }
}
typeEffect();

// Create floating petals
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 7000);
}
setInterval(createPetal, 500);

// Double tap hearts + roses
document.body.addEventListener("dblclick", (e) => {
  const floatElem = document.createElement("div");
  floatElem.classList.add("float");
  floatElem.style.left = e.clientX + "px";
  floatElem.style.top = e.clientY + "px";

  const options = ["❤️", "🌹", "💖"];
  floatElem.textContent = options[Math.floor(Math.random() * options.length)];

  document.body.appendChild(floatElem);
  setTimeout(() => floatElem.remove(), 4000);
});
