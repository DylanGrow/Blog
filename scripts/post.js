import { posts } from "./posts.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const post = posts.find(p => p.id === id);

if (post) {
  document.getElementById("title").textContent = post.title;
document.getElementById("content").innerHTML = post.content;
} else {
  document.body.innerHTML = "<h1>Post not found</h1>";
}
export const posts = [
  {
    id: 1,
    title: "My First Post",
    summary: "This is my first blog post.",
    content: `
      <p>Welcome to my blog. This is where I document my journey into tech.</p>

      <h2>Why I Started</h2>
      <p>I wanted a place to track what I'm learning.</p>

      <blockquote>
        "The best way to learn is to build."
      </blockquote>

      <h2>Example Code</h2>
      <pre><code class="language-js">
function hello() {
  console.log("Hello world");
}
      </code></pre>
    `
  }
];
console.log("post.js running");
console.log("posts:", posts);
