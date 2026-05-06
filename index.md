---
layout: home

hero:
  name: "Miyura"
  text: "Read manga, webtoons, and comics — anywhere."
  tagline: A free and open source reader you can install on your iPhone, Android, or desktop in seconds. No app store. No ads. No tracking.
  image:
    src: /hero-art.svg
    alt: Stacked manga panels illustration
  actions:
    - theme: brand
      text: Install on your device
      link: /guide/install
    - theme: alt
      text: View on GitHub
      link: https://github.com/miyura
    - theme: alt
      text: Read the docs
      link: /guide/

features:
  - icon: 📚
    title: One library, every series
    details: Track everything you're reading in one place. Pick up where you left off across devices.
  - icon: 🔍
    title: Discover new content
    details: Browse a curated catalog of sources for manga, webtoons, and comics. Search and filter to find your next read.
  - icon: 📱
    title: Installs like a native app
    details: Add Miyura to your home screen on iOS or Android. It works offline and feels just like a regular app.
  - icon: 🌙
    title: Built for long reading sessions
    details: A focused reader with paged and continuous modes, dark mode, and customizable layouts.
  - icon: 🛡️
    title: Private by default
    details: Your library stays on your device. No accounts required, no analytics, no ads.
  - icon: 🧩
    title: Open source, community built
    details: Apache 2.0 licensed. Built and maintained by contributors around the world. Pull requests welcome.
---

<style>
/* Homepage-specific overrides — keep the rest of the site clean and let the home page have presence. */

:root {
  --vp-home-hero-name-color: var(--ty-ink);
  --vp-home-hero-name-background: none;
}

.VPHome {
  padding-bottom: 0 !important;
}

/* Tighten and re-rhythm the hero */
.VPHero .name {
  font-family: var(--ty-font-display) !important;
  font-weight: 600 !important;
  letter-spacing: -0.03em !important;
  font-size: clamp(2.75rem, 6vw, 4.5rem) !important;
  line-height: 1 !important;
}

.VPHero .text {
  font-family: var(--ty-font-display) !important;
  font-weight: 400 !important;
  letter-spacing: -0.02em !important;
  font-size: clamp(1.5rem, 3vw, 2.25rem) !important;
  line-height: 1.15 !important;
  color: var(--ty-ink-soft) !important;
  margin-top: 0.75rem !important;
}

.VPHero .tagline {
  font-size: 1.0625rem !important;
  line-height: 1.6 !important;
  color: var(--ty-muted) !important;
  max-width: 38ch;
  margin-top: 1.5rem !important;
}

.VPHero .actions {
  margin-top: 2rem !important;
  gap: 0.75rem !important;
}

.VPButton.brand {
  background: var(--ty-ink) !important;
  border-color: var(--ty-ink) !important;
  color: var(--ty-paper) !important;
  border-radius: 999px !important;
  padding: 0 1.5rem !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
  transition: transform 0.15s ease, background 0.15s ease !important;
}

.VPButton.brand:hover {
  background: var(--ty-accent) !important;
  border-color: var(--ty-accent) !important;
  transform: translateY(-1px);
}

.VPButton.alt {
  border-radius: 999px !important;
  background: transparent !important;
  border-color: var(--ty-border) !important;
  color: var(--ty-ink) !important;
  font-weight: 500 !important;
  padding: 0 1.5rem !important;
}

.VPButton.alt:hover {
  border-color: var(--ty-ink) !important;
  background: transparent !important;
}

/* Features grid */
.VPFeatures {
  padding-top: 4rem !important;
}

.VPFeature {
  border: 1px solid var(--ty-border) !important;
  border-radius: 4px !important;
  background: var(--ty-paper) !important;
  transition: border-color 0.2s ease, transform 0.2s ease !important;
}

.VPFeature:hover {
  border-color: var(--ty-ink) !important;
  transform: translateY(-2px);
}

.VPFeature .icon {
  background: transparent !important;
  font-size: 1.75rem !important;
}

.VPFeature .title {
  font-family: var(--ty-font-display) !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

.VPFeature .details {
  color: var(--ty-muted) !important;
}
</style>

<div class="ty-section ty-section--quote">
  <div class="ty-quote-mark">「</div>
  <p class="ty-quote">
    Built by readers, for readers. No paywalls, no algorithms deciding what you see next — just your library, the way you want it.
  </p>
</div>

<div class="ty-section">
  <div class="ty-eyebrow">Get started</div>
  <h2 class="ty-h2">Three steps. Then you're reading.</h2>

  <div class="ty-steps">
    <div class="ty-step">
      <div class="ty-step__num">01</div>
      <h3>Open the web app</h3>
      <p>Visit Miyura in any modern browser — Safari on iOS, Chrome on Android, anything on desktop.</p>
    </div>
    <div class="ty-step">
      <div class="ty-step__num">02</div>
      <h3>Add to your home screen</h3>
      <p>Tap the share button and choose "Add to Home Screen." It now behaves like a regular app, with offline support.</p>
    </div>
    <div class="ty-step">
      <div class="ty-step__num">03</div>
      <h3>Pick a source and start reading</h3>
      <p>Browse the catalog, find a series you like, and tap to add it to your library. That's it.</p>
    </div>
  </div>

  <div class="ty-cta-row">
    <a href="/guide/install" class="ty-link-arrow">Full install guide →</a>
  </div>
</div>

<div class="ty-section ty-section--alt">
  <div class="ty-split">
    <div>
      <div class="ty-eyebrow">Open source</div>
      <h2 class="ty-h2">Yours to inspect, fork, and improve.</h2>
      <p class="ty-lede">
        Miyura is released under the Apache License 2.0. The code lives on GitHub. Anyone can read it, audit it, contribute to it, or run their own copy.
      </p>
      <p class="ty-body">
        The project is built and maintained by volunteers. If you'd like to help — whether you write code, design, write docs, or just want to file good bug reports — we'd love to have you.
      </p>
      <div class="ty-link-list">
        <a href="/contributing/guide">Contributing guide →</a>
        <a href="/contributing/style-guide">Project style guide →</a>
        <a href="/contributing/code-of-conduct">Code of conduct →</a>
        <a href="/guide/license">License (Apache 2.0) →</a>
        <a href="/guide/credits">Credits →</a>
      </div>
    </div>
    <div class="ty-card-stack">
      <div class="ty-card ty-card--1">
        <div class="ty-card__label">commit</div>
        <code>feat(reader): add rtl-vertical mode</code>
      </div>
      <div class="ty-card ty-card--2">
        <div class="ty-card__label">issue</div>
        <code>Improve cache eviction on low-storage devices</code>
      </div>
      <div class="ty-card ty-card--3">
        <div class="ty-card__label">PR #1248</div>
        <code>Translate UI to Bahasa Indonesia</code>
      </div>
    </div>
  </div>
</div>

<div class="ty-section">
  <div class="ty-eyebrow">Frequently asked</div>
  <h2 class="ty-h2">Common questions</h2>

  <div class="ty-faq">
    <details>
      <summary>Is Miyura really free?</summary>
      <p>Yes. The web app is free, ad-free, and open source. There's no paid tier. If you find it useful and want to support the project, contributing to the GitHub repository or helping with translations is the most valuable thing you can do.</p>
    </details>
    <details>
      <summary>Does it work on iPhone?</summary>
      <p>Yes. Open the site in Safari, tap the share icon, and choose "Add to Home Screen." Miyura will install as a Progressive Web App and behave like a regular iOS app, including a home screen icon and full-screen mode.</p>
    </details>
    <details>
      <summary>What about Android?</summary>
      <p>Same idea. Open the site in Chrome (or another modern browser), and you'll see an "Install app" prompt or option in the menu. Once installed, it appears in your app drawer like any other app.</p>
    </details>
    <details>
      <summary>Where does my reading history live?</summary>
      <p>On your device. Miyura stores your library locally by default. We don't run accounts, sync servers, or analytics. If you want sync across devices, that's a feature you can opt into and configure yourself.</p>
    </details>
    <details>
      <summary>Where do the manga, webtoons, and comics come from?</summary>
      <p>Miyura connects to user-configurable sources. You decide what to add. The project itself does not host or distribute content — please respect the rights of creators and support official releases where available.</p>
    </details>
  </div>
</div>

<div class="ty-section ty-section--final">
  <h2 class="ty-final-h">Ready to read?</h2>
  <p class="ty-final-p">Install Miyura in under a minute. No account, no setup, no nonsense.</p>
  <div class="ty-final-actions">
    <a href="/guide/install" class="ty-btn-primary">Install on your device</a>
    <a href="https://github.com/miyura" class="ty-btn-secondary">View source on GitHub</a>
  </div>
</div>

<style scoped>
.ty-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 6rem 24px;
}

.ty-section--alt {
  background: var(--ty-paper-soft);
  max-width: none;
  padding-left: 24px;
  padding-right: 24px;
}

.ty-section--alt > * {
  max-width: 1152px;
  margin: 0 auto;
}

.ty-eyebrow {
  font-family: var(--ty-font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ty-accent);
  margin-bottom: 1rem;
}

.ty-h2 {
  font-family: var(--ty-font-display);
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: var(--ty-ink);
  margin: 0 0 2rem;
  max-width: 22ch;
  border: 0;
  padding: 0;
}

.ty-lede {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--ty-ink-soft);
  margin: 0 0 1.25rem;
  max-width: 50ch;
}

.ty-body {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--ty-muted);
  margin: 0 0 1.25rem;
  max-width: 50ch;
}

/* Quote section */
.ty-section--quote {
  text-align: center;
  padding: 5rem 24px;
  position: relative;
}

.ty-quote-mark {
  font-family: var(--ty-font-display);
  font-size: 4rem;
  color: var(--ty-accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.ty-quote {
  font-family: var(--ty-font-display);
  font-weight: 400;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.4;
  letter-spacing: -0.015em;
  color: var(--ty-ink);
  max-width: 32ch;
  margin: 0 auto;
}

/* Steps */
.ty-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .ty-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.ty-step {
  border-top: 1px solid var(--ty-border);
  padding-top: 1.5rem;
}

.ty-step__num {
  font-family: var(--ty-font-mono);
  font-size: 0.875rem;
  color: var(--ty-accent);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.ty-step h3 {
  font-family: var(--ty-font-display);
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.01em;
  color: var(--ty-ink);
  margin: 0 0 0.5rem;
  border: 0;
  padding: 0;
}

.ty-step p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--ty-muted);
  margin: 0;
}

.ty-cta-row {
  margin-top: 2.5rem;
}

.ty-link-arrow {
  font-family: var(--ty-font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  color: var(--ty-ink) !important;
  text-decoration: none !important;
  border-bottom: 1px solid var(--ty-ink);
  padding-bottom: 2px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ty-link-arrow:hover {
  color: var(--ty-accent) !important;
  border-color: var(--ty-accent);
}

/* Split section */
.ty-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 900px) {
  .ty-split {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.ty-link-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.ty-link-list a {
  font-size: 0.9375rem;
  color: var(--ty-ink) !important;
  text-decoration: none !important;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  width: fit-content;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.ty-link-list a:hover {
  border-color: var(--ty-accent);
  color: var(--ty-accent) !important;
}

/* Card stack */
.ty-card-stack {
  position: relative;
  height: 320px;
}

.ty-card {
  position: absolute;
  background: var(--ty-paper);
  border: 1px solid var(--ty-border);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  width: 320px;
  box-shadow: 0 8px 24px -12px rgba(20, 20, 24, 0.12);
  transition: transform 0.3s ease;
}

.ty-card:hover {
  transform: translateY(-4px) !important;
}

.ty-card--1 {
  top: 0;
  left: 0;
  transform: rotate(-2deg);
}

.ty-card--2 {
  top: 100px;
  left: 60px;
  transform: rotate(1.5deg);
  z-index: 2;
}

.ty-card--3 {
  top: 200px;
  left: 20px;
  transform: rotate(-1deg);
}

@media (max-width: 900px) {
  .ty-card-stack {
    height: 360px;
    margin: 0 auto;
    max-width: 380px;
  }
}

.ty-card__label {
  font-family: var(--ty-font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ty-accent);
  margin-bottom: 0.5rem;
}

.ty-card code {
  font-family: var(--ty-font-mono);
  font-size: 0.8125rem;
  color: var(--ty-ink);
  background: transparent;
  padding: 0;
  line-height: 1.4;
}

/* FAQ */
.ty-faq {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--ty-border);
  margin-top: 2rem;
}

.ty-faq details {
  border-bottom: 1px solid var(--ty-border);
  padding: 1.25rem 0;
}

.ty-faq summary {
  font-family: var(--ty-font-display);
  font-weight: 500;
  font-size: 1.0625rem;
  letter-spacing: -0.005em;
  color: var(--ty-ink);
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.ty-faq summary::-webkit-details-marker {
  display: none;
}

.ty-faq summary::after {
  content: '+';
  font-family: var(--ty-font-mono);
  font-size: 1.25rem;
  color: var(--ty-muted);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.ty-faq details[open] summary::after {
  content: '−';
  color: var(--ty-accent);
}

.ty-faq details p {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--ty-muted);
  margin: 0.875rem 0 0;
  max-width: 65ch;
}

/* Final CTA */
.ty-section--final {
  text-align: center;
  padding: 6rem 24px 8rem;
  border-top: 1px solid var(--ty-border);
}

.ty-final-h {
  font-family: var(--ty-font-display);
  font-weight: 600;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: var(--ty-ink);
  margin: 0 0 1rem;
  border: 0;
  padding: 0;
}

.ty-final-p {
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--ty-muted);
  margin: 0 0 2rem;
}

.ty-final-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.ty-btn-primary,
.ty-btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}

.ty-btn-primary {
  background: var(--ty-ink);
  color: var(--ty-paper) !important;
}

.ty-btn-primary:hover {
  background: var(--ty-accent);
  transform: translateY(-1px);
}

.ty-btn-secondary {
  border: 1px solid var(--ty-border);
  color: var(--ty-ink) !important;
}

.ty-btn-secondary:hover {
  border-color: var(--ty-ink);
}
</style>
