// Auto-submit hidden form on page load
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("visitorForm");
  if (form) {
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).catch(err => console.error("Formspree error:", err));
  }
});
