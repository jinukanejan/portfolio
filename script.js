// Skill bar 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-bar div").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

// Project
function openModal(id) {
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const modal = document.getElementById("modal");

  if (id === 1) {
    title.textContent = "Student Performance Analysis";
    text.textContent =
      "Used RStudio to analyze academic performance data using ANOVA, T-tests, and Chi-square tests.";
  }

  if (id === 2) {
    title.textContent = "Portfolio Website";
    text.textContent =
      "Designed a cyberpunk-themed responsive portfolio using HTML, CSS animations, and JavaScript.";
  }

  if (id === 3) {
    title.textContent = "JavaScript Calculator";
    text.textContent =
      "Developed a calculator web application using core JavaScript logic.";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Contact
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "Message sent successfully!";
  });
}

