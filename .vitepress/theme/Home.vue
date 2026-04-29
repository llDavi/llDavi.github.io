<template>
  <div class="home-page">

    <!-- ── NAVBAR ────────────────────────────────────────── -->
    <nav class="home-nav">
      <a href="/" class="nav-logo">
        <span class="accent">da</span>vi<span class="dot">.</span><span class="logo-subtitle"><span class="logo-sep"> / </span>ghost in the <span class="accent">wire</span></span>
      </a>
      <ul class="nav-links">
        <li class="hide-mobile"><a href="/">home</a></li>
        <li><a href="#about">il podcast</a></li>
        <li><a href="#featured" class="nav-book">
          <i class="fa fa-headphones"></i> episodi
        </a></li>
      </ul>
    </nav>

    <!-- ── HERO ─────────────────────────────────────────── -->
    <div class="hero">

      <div class="hero-content">
        <div class="hero-eyebrow">root@davi:~#</div>
        <h1 class="hero-title">GHOST IN<br>THE&nbsp;<span class="t-purple">WIRE</span></h1>
        <p class="hero-tagline">
          <strong>ogni sistema ha un punto di ingresso.</strong><br>
          Storie vere di chi è entrato dove non doveva. Hacking, spionaggio, crimini informatici.
        </p>
        <div class="hero-cta">
          <a href="#featured" class="btn btn-primary">
            <i class="fa fa-headphones"></i>
            ascolta
          </a>
          <a href="#about" class="btn btn-ghost">
            entra
            <i class="fa fa-arrow-down" style="font-size:0.8rem;"></i>
          </a>
        </div>
      </div>

      <div class="hero-artwork">
        <img src="/artwork.png" alt="DAVI" class="hero-img">
      </div>

    </div>

    <!-- ── ABOUT ─────────────────────────────────────────── -->
    <section class="content-section" id="about">
      <div class="container">
        <div class="section-eyebrow">// root access</div>
        <div class="about-grid">
          <div class="about-avatar-wrap">
            <div class="about-avatar">
              <img src="/image_2.png" alt="DAVI" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="about-handle">root@davi:~#</div>
          </div>
          <div class="about-text">
            <h2 class="section-title">di cosa si tratta?</h2>
            <p class="about-subtitle">un podcast di davi</p>
            <p>
              Ghost in the Wire è un podcast di narrazione su storie vere dal mondo cyber.
              Ogni episodio è un caso reale. Un'intrusione, una truffa, un'operazione di stato.
            </p>
            <p>
              Il formato è deliberatamente semplice: solo la storia,
              raccontata con il ritmo di un thriller. Accessibile a tutti.
              Non serve sapere cos'è un firewall per seguirla.
            </p>
            <p>
              Storie italiane e internazionali. Casi chiusi e operazioni declassificate.
              Dal ragazzo in cameretta che entra nel Pentagono ai mercati criminali
              che muovono miliardi nel dark web.
            </p>
            <div class="about-tags">
              <span class="tag purple">hacking</span>
              <span class="tag purple">spionaggio</span>
              <span class="tag green">crimini digitali</span>
              <span class="tag green">dark web</span>
              <span class="tag">social engineering</span>
              <span class="tag">podcast</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURED ──────────────────────────────────────── -->
    <section class="content-section" id="featured">
      <div class="container">
        <div class="section-eyebrow">// episodi</div>
        <h2 class="section-title">in evidenza</h2>
        <p class="featured-intro">quattro storie. tutte vere.</p>
        <div class="featured-grid">

          <a href="/episodi/stagione-1/ep01-unlimited" class="featured-card">
            <div class="card-top-bar"></div>
            <div class="card-category">crimini finanziari</div>
            <div class="card-title">unlimited</div>
            <div class="card-desc">
              dubai, 2013. in una sola notte, centinaia di persone in 27 paesi
              prelevano quaranta milioni di dollari dai bancomat. nessuna pistola.
              nessuna maschera. solo carte clonate e un database violato.
            </div>
            <div class="card-link">ascolta →</div>
          </a>

          <a href="/episodi/stagione-1/ep02-operazione-fantasma" class="featured-card">
            <div class="card-top-bar"></div>
            <div class="card-category">spionaggio di stato</div>
            <div class="card-title">operazione fantasma</div>
            <div class="card-desc">
              per anni, dentro le reti governative di mezzo mondo.
              invisibili. pazienti. nessuno sapeva che c'erano.
              questa è la storia di come li hanno trovati.
            </div>
            <div class="card-link">ascolta →</div>
          </a>

          <a href="/episodi/stagione-1/ep03-il-principe-nigeriano" class="featured-card">
            <div class="card-top-bar"></div>
            <div class="card-category">social engineering</div>
            <div class="card-title">il principe nigeriano</div>
            <div class="card-desc">
              quella email la conosci. ma non sai cosa c'è dietro.
              un'organizzazione criminale strutturata, tre continenti,
              miliardi di dollari. non è quello che pensi.
            </div>
            <div class="card-link">ascolta →</div>
          </a>

          <a href="/episodi/stagione-1/ep04-il-mercato-piu-pericoloso" class="featured-card">
            <div class="card-top-bar"></div>
            <div class="card-category">dark web</div>
            <div class="card-title">il giorno che chiusero alphabay</div>
            <div class="card-desc">
              era dieci volte silk road. il fondatore aveva 25 anni,
              viveva in thailandia e guidava una lamborghini.
              pensava di essere intoccabile.
            </div>
            <div class="card-link">ascolta →</div>
          </a>

        </div>
        <div class="featured-cta">
          <a href="/episodi/" class="btn btn-ghost">
            tutti gli episodi
            <i class="fa fa-arrow-right" style="font-size:0.8rem;"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ──────────────────────────────────────────── -->
    <footer class="site-footer">
      <div class="footer-inner">
        <span class="footer-name">ghost in the wire<span class="footer-dot">.</span></span>
        <span class="footer-sep">/</span>
        <span class="footer-sub">un podcast di davi</span>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── RESET ───────────────────────────────────────────────── */
.home-page {
  --bg:           #0d1117;
  --surface:      #161b22;
  --surface-2:    #1c2128;
  --border:       #30363d;
  --border-muted: #21262d;
  --fg:           #c9d1d9;
  --fg-muted:     #8b949e;
  --fg-subtle:    #484f58;
  --purple:       #a371f7;
  --purple-muted: rgba(163, 113, 247, 0.12);
  --purple-border:rgba(163, 113, 247, 0.35);
  --purple-glow:  rgba(163, 113, 247, 0.25);
  --green:        #3fb950;
  --green-muted:  rgba(63, 185, 80, 0.12);
  --green-border: rgba(63, 185, 80, 0.35);

  background: var(--bg);
  color: var(--fg);
  font-family: 'Inter', system-ui, sans-serif;
  /* compensate for VitePress navbar */
  margin-top: calc(-1 * var(--vp-nav-height, 64px));
  padding-top: var(--vp-nav-height, 64px);
}

/* ── NAVBAR ──────────────────────────────────────────────── */
.home-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: 0 2.5rem;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 1rem;
  color: var(--fg);
  text-decoration: none !important;
  letter-spacing: -0.03em;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-logo .accent   { color: var(--purple); }
.nav-logo .dot      { color: var(--green); }
.nav-logo .logo-sep { color: var(--fg-subtle); font-weight: 400; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--fg-muted);
  text-decoration: none !important;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}

.nav-links a:hover {
  color: var(--fg);
  background: var(--surface);
}

.nav-links .nav-book {
  color: var(--green) !important;
  border: 1px solid var(--green-border);
  padding: 0.4rem 1rem;
  margin-left: 0.5rem;
  transition: background 0.2s, transform 0.15s;
}

.nav-links .nav-book:hover {
  background: var(--green-muted);
  transform: translateY(-1px);
}

/* ── HERO ────────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 38%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 4rem 6rem 12rem;
  position: relative;
}

.hero-artwork {
  position: relative;
  overflow: hidden;
  border-left: 1px solid var(--purple-border);
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--surface-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg-subtle);
  font-size: 4rem;
}

.hero-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--green);
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.hero-eyebrow::before {
  content: '';
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 10px var(--green);
  animation: blink 2.4s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.hero-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2.6rem, 7.5vw, 5.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: var(--fg);
  margin-bottom: 2rem;
  user-select: none;
}

.hero-title .t-purple { color: var(--purple); }

.hero-tagline {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: var(--fg-muted);
  font-weight: 400;
  max-width: 580px;
  margin-bottom: 2.75rem;
  line-height: 1.75;
}

.hero-tagline strong { color: var(--fg); font-weight: 600; }

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}


/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none !important;
  transition: transform 0.15s, background 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.btn-primary {
  background: var(--purple);
  color: #fff !important;
  box-shadow: 0 0 20px var(--purple-glow);
}

.btn-primary:hover {
  background: #bc8cff;
  transform: translateY(-2px);
  box-shadow: 0 4px 24px var(--purple-glow);
}

.btn-ghost {
  background: transparent;
  color: var(--fg-muted) !important;
  border: 1px solid var(--border);
}

.btn-ghost:hover {
  border-color: var(--fg-subtle);
  color: var(--fg) !important;
  transform: translateY(-2px);
}

/* ── SECTIONS ────────────────────────────────────────────── */
.content-section {
  padding: 7rem 2.5rem;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.section-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--purple);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--fg);
  margin: 0 0 0.5rem;
  border: none !important;
}

/* ── ABOUT ───────────────────────────────────────────────── */
#about {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}

.about-avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.about-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 2px solid var(--purple-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg-subtle);
  font-size: 3.5rem;
  overflow: hidden;
  box-shadow: 0 0 30px var(--purple-glow);
}

.about-handle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--fg-subtle);
}

.about-text p {
  color: var(--fg-muted);
  font-size: 0.97rem;
  line-height: 1.85;
  margin-bottom: 1.1rem;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.75rem;
}

.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  color: var(--fg-muted);
}

.tag.purple {
  border-color: var(--purple-border);
  color: var(--purple);
  background: var(--purple-muted);
}

.tag.green {
  border-color: var(--green-border);
  color: var(--green);
  background: var(--green-muted);
}

/* ── FEATURED ────────────────────────────────────────────── */
#featured { background: var(--bg); }

.featured-intro {
  color: var(--fg-muted);
  font-size: 0.97rem;
  margin-top: 0.5rem;
  max-width: 500px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 3rem;
}

.featured-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
  text-decoration: none !important;
  color: var(--fg);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.2s, background 0.25s;
}

.featured-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--purple-muted), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.featured-card:hover {
  border-color: var(--purple-border);
  transform: translateY(-4px);
  background: var(--surface-2);
}

.featured-card:hover::after { opacity: 1; }

.card-top-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--green));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.featured-card:hover .card-top-bar { transform: scaleX(1); }

.card-category {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--fg);
  line-height: 1.35;
}

.card-desc {
  font-size: 0.86rem;
  color: var(--fg-muted);
  line-height: 1.65;
  flex: 1;
}

.card-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--purple);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  transition: gap 0.2s;
}

.featured-card:hover .card-link { gap: 0.6rem; }

.featured-cta {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}

/* ── ABOUT SUBTITLE ──────────────────────────────────────── */
.about-subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--fg-subtle);
  margin-top: 0.25rem;
  margin-bottom: 1.5rem !important;
}

/* ── FOOTER ──────────────────────────────────────────────── */
.site-footer {
  border-top: 1px solid var(--border);
  padding: 2rem 2.5rem;
  background: var(--surface);
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
}

.footer-name {
  color: var(--fg);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.footer-dot { color: var(--green); }

.footer-sep {
  color: var(--fg-subtle);
}

.footer-sub {
  color: var(--fg-subtle);
}

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  /* Navbar */
  .home-nav { padding: 0 1rem; }
  .logo-subtitle { display: none; }
  .nav-links { gap: 0.1rem; flex-shrink: 0; }
  .hide-mobile { display: none; }

  /* Hero */
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    min-height: auto;
  }
  .hero-content { padding: 8rem 1.25rem 3rem; }
  .hero-artwork {
    display: block;
    position: relative;
    border-left: none;
    border-top: 1px solid var(--purple-border);
  }
  .hero-img {
    position: static;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  /* Sections */
  .content-section { padding: 5rem 1.25rem; }
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .about-avatar-wrap { flex-direction: row; align-items: center; }
  .featured-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .nav-links a { padding: 0.4rem 0.6rem; font-size: 0.8rem; }
  .nav-links .nav-book { padding: 0.4rem 0.75rem; margin-left: 0.25rem; }
  .hero-img { max-width: 100%; }
}
</style>
