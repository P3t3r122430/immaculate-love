// Auto-send hidden form to Formspree silently
window.addEventListener("load", () => {
  document.getElementById("notifyForm").submit();
});

// Rotating messages
const messages = [
  "You are my world 🌹",
  "Every moment with you is magic ✨",
  "Forever yours ❤️",
  "My heart beats for you 💕"
];

let i = 0;
const messageElement = document.getElementById("changingMessage");

function changeMessage() {
  messageElement.style.opacity = 0;
  setTimeout(() => {
    messageElement.textContent = messages[i];
    messageElement.style.opacity = 1;
    i = (i + 1) % messages.length;
  }, 500);
}
setInterval(changeMessage, 3000);
changeMessage();

// Falling roses animation
const canvas = document.getElementById("roses");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const roses = [];
const roseImg = new Image();
roseImg.src = "https://i.ibb.co/7zM9vGH/rose.png"; // rose PNG

for (let j = 0; j < 20; j++) {
  roses.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 2 + 1,
    size: Math.random() * 30 + 20
  });
}

function animateRoses() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  roses.forEach(r => {
    ctx.drawImage(roseImg, r.x, r.y, r.size, r.size);
    r.y += r.speed;
    if (r.y > canvas.height) {
      r.y = -r.size;
      r.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateRoses);
}
roseImg.onload = animateRoses;
