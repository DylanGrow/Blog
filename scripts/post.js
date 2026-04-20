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
document.title = `${post.title} | Dylan Dev Blog`;
document.querySelector('meta[name="description"]').setAttribute('content', post.excerpt);
document.querySelector('meta[property="og:title"]').setAttribute('content', post.title);
document.querySelector('meta[property="og:description"]').setAttribute('content', post.excerpt);
import { posts } from "./posts.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const post = posts.find(p => p.id === id);

const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");

if (!post) {
  document.title = "Post not found | Dylan Dev Blog";
  if (titleEl) titleEl.textContent = "Post not found";
  if (contentEl) contentEl.innerHTML = "<p>Sorry, that post doesn't exist. <a href='/'>Back to home</a></p>";
  // stop here so we don't access post.title
} else {
  // 1. Content
  titleEl.textContent = post.title;
  contentEl.innerHTML = post.content;

  // 2. SEO / Social
  const pageTitle = `${post.title} | Dylan Dev Blog`;
  document.title = pageTitle;

  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };

  setMeta('meta[name="description"]', post.excerpt);
  setMeta('meta[property="og:title"]', post.title);
  setMeta('meta[property="og:description"]', post.excerpt);
  setMeta('meta[property="og:url"]', window.location.href);
  setMeta('meta[name="twitter:title"]', post.title);
  setMeta('meta[name="twitter:description"]', post.excerpt);

  // optional: if you add post.image later
  if (post.image) {
    setMeta('meta[property="og:image"]', post.image);
  }

  // 3. Code highlighting (run AFTER content is in the DOM)
  if (window.hljs) {
    window.hljs.highlightAll();
  }
}
