// Select elements
let daynight = document.querySelector(".daynight");
let board = document.querySelector(".board");

// Toggle night mode
daynight.addEventListener("click", () => {
  board.classList.toggle("night");
});

// Initialize Typed.js for typing effect
let typingEffect = new Typed("#text", {
  strings: ["Harshil", "Frontend Developer", "Creative Thinker", "Problem Solver"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});
