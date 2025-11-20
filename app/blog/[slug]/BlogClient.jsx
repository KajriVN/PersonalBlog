"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
import { blogPosts } from "../../../data/blogPosts";
import Header from "../../../components/Header";
import Link from "next/link";

export default function BlogClient({ slug, markdown }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    marked.setOptions({
      highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true,
    });

    setHtml(marked.parse(markdown));

    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });
    }, 100);
  }, [markdown]);

  const post = blogPosts.find((p) => p.filename === slug);

  if (!post) {
    return (
      <div className="error-container">
        <h1>Post not found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Header active="blog" />

      <main className="post-container container">
        <article className="post-content">
          <div className="post-header">
            <div className="post-meta">
              <span className="post-date">📅 {post.date}</span>
              <span className="post-category">{post.category}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div
            className="post-body markdown-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="post-footer">
            <Link href="/blog" className="back-link">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© Katjri – All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
