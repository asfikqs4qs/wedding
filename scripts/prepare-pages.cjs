const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const dist = path.join(root, "dist");
const appHtml = path.join(dist, "app.html");
const distIndex = path.join(dist, "index.html");
const rootIndex = path.join(root, "index.html");
const distAssets = path.join(dist, "assets");
const rootAssets = path.join(root, "assets");

if (!fs.existsSync(appHtml)) {
  throw new Error("Expected dist/app.html from Vite build.");
}

fs.copyFileSync(appHtml, distIndex);
fs.rmSync(appHtml, { force: true });
fs.copyFileSync(distIndex, rootIndex);

fs.mkdirSync(rootAssets, { recursive: true });
for (const entry of fs.readdirSync(distAssets, { withFileTypes: true })) {
  if (!entry.isFile()) continue;
  fs.copyFileSync(path.join(distAssets, entry.name), path.join(rootAssets, entry.name));
}

for (const file of ["favicon.svg", "apple-touch-icon.svg"]) {
  const source = path.join(dist, file);
  if (fs.existsSync(source)) fs.copyFileSync(source, path.join(root, file));
}

fs.writeFileSync(path.join(root, ".nojekyll"), "");
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

console.log("Prepared GitHub Pages files at repository root and dist.");
