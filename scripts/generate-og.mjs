import { chromium } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'static', 'og-image.png');

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;1,400&display=swap">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    font-family: 'Jost', sans-serif;
    background: #fcfaf3;
    color: #1a1a1a;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ttvz {
    font-size: 36px;
    font-weight: 700;
    color: #b8860b;
    letter-spacing: -0.02em;
  }
  .badge {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #8a8a82;
  }
  .name {
    font-size: 92px;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1;
    margin: 0;
  }
  .tagline {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.015em;
    margin: 24px 0 0;
    max-width: 900px;
  }
  .tagline .italic { font-style: italic; font-weight: 400; color: #4a4a4a; }
  .rule {
    width: 88px;
    height: 2px;
    background: #b8860b;
    margin-top: 32px;
  }
  .meta {
    display: flex;
    align-items: baseline;
    gap: 24px;
    margin-top: 24px;
    font-size: 18px;
    color: #4a4a4a;
  }
  .meta b { font-weight: 500; color: #1a1a1a; letter-spacing: 0.01em; }
</style>
</head>
<body>
  <div class="top">
    <span class="ttvz">ttvz</span>
    <span class="badge">Conseil produit · Lyon</span>
  </div>
  <div>
    <h1 class="name">Thibaut Valez</h1>
    <p class="tagline">Je transforme les idées en <span class="italic">produits qui comptent</span>.</p>
    <div class="rule"></div>
    <p class="meta"><b>Product management</b> · <b>Conduite du changement</b></p>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const ctx = await browser.newContext({
	viewport: { width: 1200, height: 630 },
	deviceScaleFactor: 1
});
const page = await ctx.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, type: 'png', omitBackground: false, fullPage: false });
await browser.close();

console.log('OG image written →', out);
