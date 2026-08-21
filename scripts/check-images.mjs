import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const files = [
  "index.html",
  "how-it-works.html",
  "apply.html",
  "safety.html",
  "verify.html",
  "meet.html",
  "focus.html",
  "together.html",
  "couple-space.html",
  "era-ahead.html",
];

const siblingPublicWeb = resolve(process.cwd(), "../public-web");
const localContent = resolve(process.cwd(), "content");
const publicWeb = existsSync(siblingPublicWeb) ? siblingPublicWeb : localContent;
const sources = new Map();
const identities = new Map();

for (const file of files) {
  const html = readFileSync(resolve(publicWeb, file), "utf8");
  for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const source = match[1];
    if (!sources.has(source)) sources.set(source, []);
    sources.get(source).push(file);

    const identity = source.startsWith("https://images.unsplash.com/")
      ? new URL(source).pathname
      : source.replace(/^\/+/, "");
    if (!identity.endsWith("logo-mark.svg")) {
      if (!identities.has(identity)) identities.set(identity, []);
      identities.get(identity).push({ file, source });
    }
  }
}

const results = await Promise.all(
  [...sources.entries()].map(async ([source, usedBy]) => {
    const localSource = source === "img/logo-mark.svg" ? "logo-mark.svg" : source;
    const url = source.startsWith("http")
      ? source
      : new URL(localSource.replace(/^\/+/, ""), "http://localhost:3000/").href;
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
      return { source, usedBy, status: response.status, ok: response.ok };
    } catch (error) {
      return { source, usedBy, status: error instanceof Error ? error.message : "request failed", ok: false };
    }
  }),
);

for (const result of results) {
  console.log(`${result.ok ? "OK" : "BROKEN"} ${result.status} ${result.source} [${result.usedBy.join(", ")}]`);
}

const duplicates = [...identities.entries()].filter(([, uses]) => uses.length > 1);
for (const [identity, uses] of duplicates) {
  console.log(`DUPLICATE ${identity} [${uses.map(({ file }) => file).join(", ")}]`);
}

if (results.some((result) => !result.ok) || duplicates.length) process.exitCode = 1;
