// Typing messages
const messages = [
  "Hey Emma ❤️",
  "You’re my favorite thought 💭",
  "Even when we don’t talk, you’re still here 🌸",
  "This page is just for you 💕",
  "Always. Forever. Us. ✨"
];
let msgIndex = 0, charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeMessage() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 80);
  } else {
    setTimeout(eraseMessage, 2000);
  }
}

function eraseMessage() {
  if (charIndex > 0) {
    typingText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseMessage, 40);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeMessage, 500);
  }
}
typeMessage();

// Floating petals
const petalsCanvas = document.getElementById("petals");
const pCtx = petalsCanvas.getContext("2d");
petalsCanvas.width = window.innerWidth;
petalsCanvas.height = window.innerHeight;
const petals = [];
for (let i = 0; i < 30; i++) {
  petals.push({
    x: Math.random() * petalsCanvas.width,
    y: Math.random() * petalsCanvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 2
  });
}
function drawPetals() {
  pCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);
  pCtx.fillStyle = "pink";
  pCtx.beginPath();
  petals.forEach(p => {
    pCtx.moveTo(p.x, p.y);
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  });
  pCtx.fill();
  updatePetals();
}
function updatePetals() {
  petals.forEach(p => {
    p.y += Math.cos(p.d) + 1;
    p.x += Math.sin(p.d) * 1.5;
    if (p.y > petalsCanvas.height) {
      p.y = -10;
      p.x = Math.random() * petalsCanvas.width;
    }
  });
}
setInterval(drawPetals, 33);

// Floating hearts
const heartsCanvas = document.getElementById("hearts");
const hCtx = heartsCanvas.getContext("2d");
heartsCanvas.width = window.innerWidth;
heartsCanvas.height = window.innerHeight;
let hearts = [];
function drawHeart(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
  ctx.fillStyle = "rgba(255, 0, 100, 0.6)";
  ctx.fill();
  ctx.restore();
}
function animateHearts() {
  hCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
  if (Math.random() < 0.05) {
    hearts.push({
      x: Math.random() * heartsCanvas.width,
      y: heartsCanvas.height + 10,
      size: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 1.5 + 0.5
    });
  }
  hearts.forEach((h, i) => {
    drawHeart(hCtx, h.x, h.y, h.size * 5);
    h.y -= h.speed;
    if (h.y < -20) hearts.splice(i, 1);
  });
  requestAnimationFrame(animateHearts);
}
animateHearts();

// 3D Tilt effect
const herPhoto = document.querySelector(".her-photo");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  herPhoto.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
});
document.addEventListener("mouseleave", () => {
  herPhoto.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
});

// Double-tap Easter egg
let lastTap = 0;
document.addEventListener("touchend", e => {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 400 && tapLength > 0) {
    triggerBigHeart();
  }
  lastTap = currentTime;
});
document.addEventListener("dblclick", triggerBigHeart);

function triggerBigHeart() {
  const bigHeart = document.createElement("div");
  bigHeart.innerHTML = "❤️";
  bigHeart.style.position = "absolute";
  bigHeart.style.top = "50%";
  bigHeart.style.left = "50%";
  bigHeart.style.fontSize = "8rem";
  bigHeart.style.transform = "translate(-50%, -50%) scale(0)";
  bigHeart.style.transition = "transform 0.6s ease, opacity 0.8s ease";
  bigHeart.style.opacity = "1";
  document.body.appendChild(bigHeart);

  setTimeout(() => {
    bigHeart.style.transform = "translate(-50%, -50%) scale(1.5)";
    bigHeart.style.opacity = "0";
  }, 50);

  setTimeout(() => bigHeart.remove(), 1000);
}
