import { posts } from "./posts.js";

const container = document.getElementById("posts");

posts.forEach(post => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.summary}</p>
  `;

  card.addEventListener("click", () => {
    window.location.href = `post.html?id=${post.id}`;
  });

  container.appendChild(card);
});

// dark mode
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
