import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const sourceRoot = resolve(process.cwd(), "../public-web");
const contentDir = resolve(process.cwd(), "content");
const stylesDir = resolve(process.cwd(), "styles");
const publicDir = resolve(process.cwd(), "public");

if (!existsSync(sourceRoot)) {
  console.log("No sibling public-web folder found. Using files already inside marketing-web.");
  process.exit(0);
}

const htmlFiles = readdirSync(sourceRoot).filter((name) => name.endsWith(".html"));

mkdirSync(contentDir, { recursive: true });
mkdirSync(stylesDir, { recursive: true });
mkdirSync(resolve(publicDir, "media"), { recursive: true });
mkdirSync(resolve(publicDir, "img"), { recursive: true });

for (const file of htmlFiles) {
  cpSync(resolve(sourceRoot, file), resolve(contentDir, file));
}

for (const file of ["styles.css", "waitlist.css"]) {
  const from = resolve(sourceRoot, "css", file);
  if (existsSync(from)) cpSync(from, resolve(stylesDir, file));
}

if (existsSync(resolve(sourceRoot, "media"))) {
  cpSync(resolve(sourceRoot, "media"), resolve(publicDir, "media"), { recursive: true });
}

if (existsSync(resolve(sourceRoot, "img"))) {
  cpSync(resolve(sourceRoot, "img"), resolve(publicDir, "img"), { recursive: true });
  const logo = resolve(sourceRoot, "img", "logo-mark.svg");
  if (existsSync(logo)) cpSync(logo, resolve(publicDir, "logo-mark.svg"));
}

console.log(`Synced ${htmlFiles.length} pages, CSS, and media into marketing-web.`);
