---
title: "Build a Fast Portfolio with Astro + Tailwind (Step-by-Step)"
description: "A practical, beginner-friendly guide to ship a blazing-fast portfolio using Astro and TailwindCSS."
date: "2025-08-29"
author: "James"
tags: ["astro", "tailwind", "portfolio"]
coverImage: "/blog/astro-portfolio-cover.jpg"
draft: false
---

Astro is perfect for **content-first** sites like portfolios and blogs. In this guide, you’ll scaffold a project, add pages, style with Tailwind, and deploy.

## Why Astro?
- Zero-JS by default for fast loads
- File-based routing (pages are just files)
- Content Collections for tidy blogs
- Easy deploys to Vercel/Netlify

## 1) Create a new Astro project
```bash
npm create astro@latest
cd my-portfolio
npm run dev
