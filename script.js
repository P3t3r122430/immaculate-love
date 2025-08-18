// Messages
const messages = [
  "You’re my reason to smile 💖",
  "Every moment with you is magic ✨",
  "Forever feels short with you ❤️",
  "You make my world brighter 🌍",
  "Love you endlessly 💕"
];

let messageIndex = 0;
const messageElement = document.getElementById("message");

// Typewriter effect
function typeMessage(text, i = 0) {
  if (i < text.length) {
    messageElement.textContent = text.substring(0, i + 1);
    setTimeout(() => typeMessage(text, i + 1), 100);
  } else {
    setTimeout(nextMessage, 2000);
  }
}

function nextMessage() {
  messageIndex = (messageIndex + 1) % messages.length;
  typeMessage(messages[messageIndex]);
}

typeMessage(messages[messageIndex]);

// Petals falling
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  document.body.appendChild(petal);

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 3 + Math.random() * 5 + "s";

  setTimeout(() => petal.remove(), 8000);
}
setInterval(createPetal, 500);

// Hearts floating
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";

  setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 2000);

// 3D tilt effect
const photo = document.getElementById("photo");
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  photo.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
document.addEventListener("mouseleave", () => {
  photo.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// Double-tap glowing hearts (mobile)
let lastTap = 0;
document.addEventListener("touchend", function (e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    document.body.appendChild(heart);

    heart.style.left = e.changedTouches[0].pageX + "px";
    heart.style.top = e.changedTouches[0].pageY + "px";

    setTimeout(() => heart.remove(), 2000);
  }
  lastTap = currentTime;
});
