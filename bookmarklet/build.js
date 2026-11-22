// Builds a javascript: bookmarklet from fill.js and a profile.
// Usage: node build.js [profile.json]
//   Default profile: profile.json if present, else profile.example.json.
// Output (gitignored): dist/bookmarklet.txt and dist/install.html

const fs = require('fs');
const path = require('path');

const here = __dirname;
const profilePath = process.argv[2] ||
  (fs.existsSync(path.join(here, 'profile.json'))
    ? path.join(here, 'profile.json')
    : path.join(here, 'profile.example.json'));

const profile = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
const body = fs.readFileSync(path.join(here, 'fill.js'), 'utf8');

const code = '(function (PROFILE) {' + body + '\n})(' + JSON.stringify(profile) + ');';
const url = 'javascript:' + encodeURIComponent(code);

const dist = path.join(here, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'bookmarklet.txt'), url + '\n');

const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>MDAC autofill install</title>
<style>body{font-family:system-ui,sans-serif;margin:16px;line-height:1.5}
a.bm{display:inline-block;padding:10px 16px;background:#1565c0;color:#fff;border-radius:6px;text-decoration:none}</style>
</head><body>
<h2>MDAC autofill</h2>
<p>1. Show the bookmarks bar (Chrome/Edge: Ctrl+Shift+B or Cmd+Shift+B; Firefox: Ctrl+Shift+B; Safari: View &gt; Show Favorites Bar).</p>
<p>2. Drag this button to the bookmarks bar. On iPhone/iPad, copy the link below and save it as a bookmark URL instead.</p>
<p><a class="bm" href="${url.replace(/"/g, '&quot;')}">MDAC autofill</a></p>
<p>3. Open the MDAC registration page, click the bookmark, then solve the slider and submit yourself.</p>
<details><summary>Raw bookmark URL (for copy/paste)</summary><textarea rows="6" style="width:100%">${url.replace(/</g, '&lt;')}</textarea></details>
</body></html>
`;
fs.writeFileSync(path.join(dist, 'install.html'), html);

console.log('Built with profile: ' + path.basename(profilePath));
console.log('Open ' + path.join('dist', 'install.html') + ' and drag the button to the bookmarks bar.');
