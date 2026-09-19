import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const pageFiles = {
  home: "index.html",
  "how-it-works": "how-it-works.html",
  safety: "safety.html",
  duos: "meet.html",
  squads: "gatherings.html",
  return: "return.html",
  intent: "intent.html",
  focus: "focus.html",
  together: "together.html",
  "era-ahead": "era-ahead.html",
  suggest: "suggest.html",
  privacy: "privacy.html",
  terms: "terms.html",
  "community-guidelines": "community-guidelines.html",
  grievance: "grievance.html",
} as const;

export type PageSlug = keyof typeof pageFiles;

export type MarketingPage = {
  slug: PageSlug;
  title: string;
  description: string;
  bodyClass: string;
  mainHtml: string;
};

const localContent = resolve(process.cwd(), "content");
const siblingPublicWeb = resolve(process.cwd(), "../public-web");
const nestedPublicWeb = resolve(process.cwd(), "apps/public-web");

const publicWebDirectory = existsSync(siblingPublicWeb)
  ? siblingPublicWeb
  : existsSync(localContent)
    ? localContent
    : nestedPublicWeb;

/**
 * Filenames whose static page is gone but whose route still exists, so links inside the
 * remaining pages keep resolving.
 *
 * `early-access.html` was retired on 2026-09-20: `/early-access` has rendered the React form
 * in `app/early-access/page.tsx` for a while, leaving the HTML unreachable while it still
 * carried values the API rejects. Eighteen pages link to the old filename, so the rewrite has
 * to outlive the file.
 */
const retiredPageRoutes: Record<string, string> = {
  "early-access.html": "/early-access",
};

const routeMap: Record<string, string> = {
  ...Object.fromEntries(
    Object.entries(pageFiles).map(([slug, file]) => [file, slug === "home" ? "/" : `/${slug}`]),
  ),
  ...retiredPageRoutes,
};

function textFrom(source: string, expression: RegExp, fallback: string) {
  return source.match(expression)?.[1]?.trim() || fallback;
}

function rewriteStaticLinks(markup: string) {
  let result = markup.replaceAll('href="meet.html', 'href="/meet');

  Object.entries(routeMap).forEach(([file, route]) => {
    result = result.replaceAll(`href="${file}`, `href="${route}`);
  });

  return result
    .replaceAll('src="img/', 'src="/')
    .replaceAll("src='img/", "src='/")
    .replaceAll('src="media/', 'src="/media/')
    .replaceAll("src='media/", "src='/media/");
}

export function getMarketingPage(slug: PageSlug): MarketingPage {
  const source = readFileSync(resolve(publicWebDirectory, pageFiles[slug]), "utf8");
  const mainHtml = source.match(/<main(?:\s[^>]*)?>[\s\S]*?<\/main>/i)?.[0];

  if (!mainHtml) {
    throw new Error(`No <main> element found in ${pageFiles[slug]}`);
  }

  return {
    slug,
    title: textFrom(source, /<title>([\s\S]*?)<\/title>/i, "Aynera"),
    description: textFrom(
      source,
      /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i,
      "Aynera creates verified, intentional introductions for people seeking a real relationship.",
    ),
    bodyClass: textFrom(source, /<body[^>]*class="([^"]*)"[^>]*>/i, ""),
    mainHtml: rewriteStaticLinks(mainHtml),
  };
}

export function isPageSlug(value: string): value is PageSlug {
  return value in pageFiles && value !== "home";
}

export const routeSlugs = Object.keys(pageFiles).filter(
  (slug): slug is Exclude<PageSlug, "home"> => slug !== "home",
);
