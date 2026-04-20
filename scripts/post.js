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
