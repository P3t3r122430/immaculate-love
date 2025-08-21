// Rotating messages
const messages = [
  "Welcome 💫",
  "You are loved 🌹",
  "Forever in my heart ❤️",
  "This is for you ✨",
  "Always thinking of you 💭"
];

let index = 0;
const messageElement = document.getElementById("changing-message");

function changeMessage() {
  messageElement.style.opacity = 0; // fade out
  setTimeout(() => {
    index = (index + 1) % messages.length;
    messageElement.textContent = messages[index];
    messageElement.style.opacity = 1; // fade in
  }, 500);
}

setInterval(changeMessage, 4000);

// Silent Formspree auto-submit
window.addEventListener("load", () => {
  const form = document.getElementById("tracker-form");
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
});
