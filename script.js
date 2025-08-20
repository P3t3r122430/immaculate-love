// Silent visitor notification (no visible feedback to user)
fetch("https://formspree.io/f/mwpqdrbw", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    visited: "true",
    timestamp: new Date().toISOString()
  })
}).catch(err => console.error("Tracking error:", err));

// Back to top button logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
