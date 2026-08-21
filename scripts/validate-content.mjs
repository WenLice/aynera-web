import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const pages = [
  "index.html",
  "how-it-works.html",
  "apply.html",
  "early-access.html",
  "safety.html",
  "verify.html",
  "meet.html",
  "gatherings.html",
  "return.html",
  "intent.html",
  "focus.html",
  "together.html",
  "couple-space.html",
  "era-ahead.html",
  "types.html",
  "suggest.html",
  "privacy.html",
  "terms.html",
  "delete-account.html",
  "grievance.html",
];

const siblingPublicWeb = resolve(process.cwd(), "../public-web");
const localContent = resolve(process.cwd(), "content");
const publicWeb = existsSync(siblingPublicWeb) ? siblingPublicWeb : localContent;
const knownPages = new Set(pages);
const failures = [];

for (const page of pages) {
  const path = resolve(publicWeb, page);
  if (!existsSync(path)) {
    failures.push(`${page}: source file is missing`);
    continue;
  }

  const source = readFileSync(path, "utf8");
  if (!/<main(?:\s[^>]*)?>[\s\S]*?<\/main>/i.test(source)) failures.push(`${page}: <main> is missing`);
  if (!/<title>[\s\S]*?<\/title>/i.test(source)) failures.push(`${page}: <title> is missing`);

  for (const match of source.matchAll(/href="([^"]+\.html)(?:[#?][^"]*)?"/g)) {
    const linkedPage = match[1].replace(/^\.\//, "");
    if (!knownPages.has(linkedPage)) failures.push(`${page}: unknown internal route ${linkedPage}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${pages.length} marketing routes and their internal links.`);
}
