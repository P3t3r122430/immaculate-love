// Messages that rotate
const messages = [
  "You’re still my world 🌍",
  "Every heartbeat reminds me of you ❤️",
  "Your smile lights up my sky ✨",
  "Forever, even in silence 🌹"
];

let msgIndex = 0;
function changeMessage() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}
setInterval(changeMessage, 3000);
changeMessage();

// Floating hearts
const heartsCanvas = document.getElementById("hearts-canvas");
const heartsCtx = heartsCanvas.getContext("2d");
heartsCanvas.width = window.innerWidth;
heartsCanvas.height = window.innerHeight;

let hearts = [];
class Heart {
  constructor() {
    this.x = Math.random() * heartsCanvas.width;
    this.y = heartsCanvas.height + 20;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 1 + 0.5;
  }
  draw() {
    heartsCtx.fillStyle = "rgba(255,0,100,0.6)";
    heartsCtx.beginPath();
    heartsCtx.moveTo(this.x, this.y);
    heartsCtx.bezierCurveTo(this.x - this.size, this.y - this.size,
                            this.x - this.size, this.y + this.size/2,
                            this.x, this.y + this.size);
    heartsCtx.bezierCurveTo(this.x + this.size, this.y + this.size/2,
                            this.x + this.size, this.y - this.size,
                            this.x, this.y);
    heartsCtx.fill();
  }
  update() {
    this.y -= this.speed;
    this.draw();
  }
}
function animateHearts() {
  heartsCtx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);
  if (Math.random() < 0.05) hearts.push(new Heart());
  hearts.forEach((h, i) => {
    h.update();
    if (h.y < -10) hearts.splice(i, 1);
  });
  requestAnimationFrame(animateHearts);
}
animateHearts();

// Petals
const petalsCanvas = document.getElementById("petals-canvas");
const petalsCtx = petalsCanvas.getContext("2d");
petalsCanvas.width = window.innerWidth;
petalsCanvas.height = window.innerHeight;

let petals = [];
class Petal {
  constructor() {
    this.x = Math.random() * petalsCanvas.width;
    this.y = -20;
    this.size = Math.random() * 15 + 10;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * Math.PI * 2;
  }
  draw() {
    petalsCtx.fillStyle = "pink";
    petalsCtx.beginPath();
    petalsCtx.ellipse(this.x, this.y, this.size/2, this.size, this.angle, 0, 2*Math.PI);
    petalsCtx.fill();
  }
  update() {
    this.y += this.speed;
    this.x += Math.sin(this.y / 20);
    this.draw();
  }
}
function animatePetals() {
  petalsCtx.clearRect(0,0,petalsCanvas.width,petalsCanvas.height);
  if (Math.random() < 0.05) petals.push(new Petal());
  petals.forEach((p, i) => {
    p.update();
    if (p.y > petalsCanvas.height + 20) petals.splice(i, 1);
  });
  requestAnimationFrame(animatePetals);
}
animatePetals();

// 3D tilt effect
const photo = document.querySelector(".background-photo");
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 50;
  let y = (window.innerHeight / 2 - e.pageY) / 50;
  photo.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
document.addEventListener("mouseleave", () => {
  photo.style.transform = `rotateY(0) rotateX(0)`;
});

// Secret double-tap Easter egg
let lastTap = 0;
document.addEventListener("touchend", () => {
  let now = new Date().getTime();
  if (now - lastTap < 300) {
    triggerSecretHeart();
  }
  lastTap = now;
});
document.addEventListener("dblclick", triggerSecretHeart);

function triggerSecretHeart() {
  const heart = document.getElementById("secret-heart");
  heart.classList.add("active");
  setTimeout(() => heart.classList.remove("active"), 1000);
}
// ===== PRELOADER SCRIPT =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");

  // Show background + message smoothly
  document.querySelector(".background").classList.add("show");
  document.querySelector(".message").classList.add("show");
});
