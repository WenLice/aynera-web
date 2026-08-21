import { cpSync, existsSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");
const distDir = join(root, "dist");
const publicDir = join(root, "public");

if (!existsSync(outDir)) {
  console.error("Missing out/. Run next build before prepare-release.");
  process.exit(1);
}

if (!existsSync(publicDir)) {
  console.error("Missing public/. Release needs the public assets folder.");
  process.exit(1);
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });

console.log("Release ready:");
console.log(`  dist/   ← static site (from out/)`);
console.log(`  public/ ← source media/assets`);
