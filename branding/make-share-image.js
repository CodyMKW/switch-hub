// Renders og-image.png (the 1200x630 link preview). Run next to logo.svg with Playwright installed: node make-share-image.js
const { chromium } = require('playwright'); const fs = require('fs');
const logo = fs.readFileSync('logo.svg', 'utf8');
const html = `<body style="margin:0;width:1200px;height:630px;background:#18181c;font-family:Inter,system-ui,sans-serif;position:relative;overflow:hidden;color:white">
<div style="position:absolute;width:640px;height:640px;border-radius:50%;background:#00c3e3;filter:blur(130px);opacity:.30;left:-120px;top:-180px"></div>
<div style="position:absolute;width:600px;height:600px;border-radius:50%;background:#ff4554;filter:blur(130px);opacity:.26;right:-140px;bottom:-200px"></div>
<div style="position:absolute;width:420px;height:420px;border-radius:50%;background:#a855f7;filter:blur(120px);opacity:.16;left:420px;top:150px"></div>
<div style="position:relative;display:flex;align-items:center;height:100%;padding:0 90px;gap:70px">
  <div style="width:300px;height:300px;flex-shrink:0">${logo.replace('<svg ', '<svg width="300" height="300" ')}</div>
  <div style="flex:1">
    <div style="font-size:112px;font-weight:800;letter-spacing:-0.03em;line-height:1;background:linear-gradient(90deg,#fff,#8fe6f5 55%,#ff9aa3);-webkit-background-clip:text;background-clip:text;color:transparent">Switch Hub</div>
    <div style="font-size:36px;font-weight:500;color:#d7dde2;margin-top:26px;line-height:1.3">Browse your Switch screenshots and clips, and share them with friends.</div>
    <div style="display:flex;gap:12px;margin-top:34px;flex-wrap:wrap">${['Gallery', 'Chat', 'Group chats', 'Games', 'Voice calls', 'Watch together'].map(t => `<span style="font-size:22px;font-weight:600;padding:8px 20px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#e8edf0">${t}</span>`).join('')}</div>
    <div style="font-size:24px;color:#9aa5ad;margin-top:34px">Straight between browsers. No uploads, no accounts.</div>
  </div>
</div></body>`;
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } }); await p.setContent(html); await p.waitForTimeout(300); await p.screenshot({ path: 'og-image.png' }); await b.close(); })();
