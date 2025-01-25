// Page Transitions
function PageTransitions() {
  const sections = document.querySelectorAll('.section');
  const sectBtns = document.querySelectorAll('.control');
  const allSections = document.querySelector('.main-content');

  // Handle button clicks
  sectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Activate clicked button
      document.querySelector('.active-btn').classList.remove('active-btn');
      btn.classList.add('active-btn');

      // Show corresponding section
      const id = btn.dataset.id;
      document.querySelector('.section.active').classList.remove('active');
      document.getElementById(id).classList.add('active');
    });
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
