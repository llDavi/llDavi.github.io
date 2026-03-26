# IIDavi.github.io

Personal blog — red team, penetration testing, security awareness.

## Setup

1. Create a repo named exactly `IIDavi.github.io` on GitHub
2. Push all these files to the `main` branch
3. Go to repo **Settings → Pages → Source → Deploy from branch → main**
4. Site will be live at `https://iidavi.github.io` in ~2 minutes

## Writing a new post

Create a file in `_posts/` with this naming format:

```
_posts/YYYY-MM-DD-post-title.md
```

With this header at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [red-team, web]
tags: [pentest, owasp, recon]
excerpt: "One line summary shown on the homepage."
---

Your content here in Markdown.
```

## Changing the blog name

Edit `_config.yml` → change the `title` field.
