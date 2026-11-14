// Draws the Switch Hub logo (two glowing controllers) and renders every icon size.
// Run from an empty folder with Playwright installed: node make-icons.js
// Then copy: logo.png/logo.svg/favicon*/apple-touch-icon/icon-* next to index.html and the 1024px file to Discord.
const { chromium } = require('playwright'); const fs = require('fs');
const CY = '#00c3e3', RD = '#ff4554';
const mark = (glow, sw) => `<g ${glow ? 'filter="url(#g)"' : ''}><rect x="8" y="18" width="36" height="64" rx="15" fill="none" stroke="${CY}" stroke-width="${sw}"/><rect x="56" y="18" width="36" height="64" rx="15" fill="none" stroke="${RD}" stroke-width="${sw}"/></g><circle cx="26" cy="36" r="5.5" fill="${CY}"/><circle cx="74" cy="64" r="5.5" fill="${RD}"/><circle cx="26" cy="63" r="3" fill="${CY}" opacity=".65"/><circle cx="74" cy="37" r="3" fill="${RD}" opacity=".65"/>`;
const defs = `<defs><filter id="g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><radialGradient id="c" cx="25%" cy="22%" r="70%"><stop offset="0" stop-color="${CY}" stop-opacity=".22"/><stop offset="1" stop-color="${CY}" stop-opacity="0"/></radialGradient><radialGradient id="r" cx="78%" cy="85%" r="70%"><stop offset="0" stop-color="${RD}" stop-opacity=".22"/><stop offset="1" stop-color="${RD}" stop-opacity="0"/></radialGradient></defs>`;
const svg = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${defs}${inner}</svg>`;
// the mark scaled around the centre (50,50)
const scaled = (s, glow, sw) => `<g transform="translate(50 50) scale(${s}) translate(-50 -50)">${mark(glow, sw)}</g>`;
const bg = (rx) => `<rect width="100" height="100" rx="${rx}" fill="#18181c"/><rect width="100" height="100" rx="${rx}" fill="url(#c)"/><rect width="100" height="100" rx="${rx}" fill="url(#r)"/>`;
const files = {
  'logo.svg': svg(mark(true, 6)),
  'favicon.svg': svg(`<rect width="100" height="100" rx="22" fill="#18181c"/>` + scaled(1.12, false, 9).replace(/r="5.5"/g, 'r="7"').replace(/r="3"/g, 'r="4"')),
  'icon-any.svg': svg(bg(22) + scaled(0.78, true, 6)),
  'icon-full.svg': svg(bg(0) + scaled(0.78, true, 6)),
  'icon-maskable.svg': svg(bg(0) + scaled(0.6, true, 6)),
  'discord.svg': svg(bg(0) + scaled(0.74, true, 6)),
};
const jobs = [['logo.svg', 'logo.png', 256, true], ['icon-any.svg', 'icon-512.png', 512, true], ['icon-any.svg', 'icon-192.png', 192, true], ['icon-maskable.svg', 'icon-maskable-512.png', 512, false], ['icon-full.svg', 'apple-touch-icon.png', 180, false], ['favicon.svg', 'favicon-32.png', 32, true], ['favicon.svg', 'favicon-48.png', 48, true], ['discord.svg', 'discord-app-icon-1024.png', 1024, false]];
(async () => {
  for (const [n, s] of Object.entries(files)) fs.writeFileSync(n, s);
  const b = await chromium.launch(); const pg = await b.newPage();
  for (const [src, out, size, transparent] of jobs) {
    await pg.setViewportSize({ width: size, height: size });
    await pg.setContent(`<body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(files[src]).toString('base64')}" width="${size}" height="${size}" style="display:block"></body>`);
    await pg.waitForFunction(() => document.images[0].complete);
    await pg.screenshot({ path: out, omitBackground: transparent });
  }
  await b.close();
})();
