// Page Transitions
function PageTransitions() {
  const sections = document.querySelectorAll('.section');
  const sectBtns = document.querySelectorAll('.control');
  const allSections = document.querySelector('.main-content');

  // Button active class
  for (let i = 0; i < sectBtns.length; i++) {
    sectBtns[i].addEventListener('click', function () {
      // Remove 'active-btn' from previously active button
      let currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }

      // Add 'active-btn' to the clicked button
      this.classList.add('active-btn');

      // Section active based on button dataset-id
      const id = this.dataset.id;
      if (id) {
        sections.forEach((section) => section.classList.remove('active'));
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  }

  // Main-content click handler
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove 'active' from all buttons
      sectBtns.forEach((btn) => btn.classList.remove('active-btn'));
      e.target.classList.add('active-btn');

      // Remove 'active' from all sections
      sections.forEach((section) => section.classList.remove('active'));

      // Add 'active' to the clicked section
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

PageTransitions();

// Skill Percentage Animation
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".prog");

  skills.forEach(skill => {
    const targetPercentage = parseInt(skill.dataset.percentage, 10);
    let currentPercentage = 0;

    const interval = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval); // Stop when target is reached
      } else {
        currentPercentage++;
        skill.textContent = `${currentPercentage}%`;
      }
    }, 90); // Adjust speed by changing the interval time (ms)
  });
});

// Counter Animation
let counterElement = document.getElementById("counter");
let count = 0;

function incrementCounter() {
  if (count <= 50) {
    counterElement.innerText = count + "+";
    counterElement.style.color = "#27AE60";
    count++;
  } else {
    clearInterval(counterInterval); // Stop the increment when 50 is reached
  }
}

let counterInterval = setInterval(incrementCounter, 100);

// Theme Toggle
const themeBtn = document.querySelector('.theme-btn'); // Select the theme toggle button
themeBtn.addEventListener('click', () => {
  let element = document.body; // Target the body element
  element.classList.toggle('light-mode'); // Toggle light-mode class
});
