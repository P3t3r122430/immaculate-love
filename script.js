// Falling hearts effect
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.top = "-20px";
  heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 400);

// Falling animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

// Auto-submit hidden Formspree form once per visit
window.addEventListener("load", () => {
  const form = document.getElementById("visitForm");
  if (form) {
    form.submit();
  }
});
