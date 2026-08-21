const modules = import.meta.glob("../content/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const pageFiles = {
  home: "index.html",
  "how-it-works": "how-it-works.html",
  "early-access": "early-access.html",
  suggest: "suggest.html",
  track: "track.html",
  safety: "safety.html",
  verify: "verify.html",
  meet: "meet.html",
  focus: "focus.html",
  together: "together.html",
  "era-ahead": "era-ahead.html",
  privacy: "privacy.html",
  terms: "terms.html",
  "delete-account": "delete-account.html",
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

const routeMap: Record<string, string> = Object.fromEntries(
  Object.entries(pageFiles).map(([slug, file]) => [file, slug === "home" ? "/" : `/${slug}`]),
);

function textFrom(source: string, expression: RegExp, fallback: string) {
  return source.match(expression)?.[1]?.trim() || fallback;
}

function rewriteStaticLinks(markup: string) {
  let result = markup;

  Object.entries(routeMap).forEach(([file, route]) => {
    result = result.replaceAll(`href="${file}`, `href="${route}`);
  });

  return result
    .replaceAll('src="img/', 'src="/')
    .replaceAll("src='img/", "src='/")
    .replaceAll('src="media/', 'src="/media/')
    .replaceAll("src='media/", "src='/media/");
}

function readSource(slug: PageSlug): string {
  const file = pageFiles[slug];
  const source = modules[`../content/${file}`];
  if (!source) throw new Error(`Missing content file: ${file}`);
  return source;
}

export function getMarketingPage(slug: PageSlug): MarketingPage {
  const source = readSource(slug);
  const mainHtml = source.match(/<main(?:\s[^>]*)?>[\s\S]*?<\/main>/i)?.[0];

  if (!mainHtml) {
    throw new Error(`No <main> element found in ${pageFiles[slug]}`);
  }

  return {
    slug,
    title: textFrom(source, /<title>([\s\S]*?)<\/title>/i, "Elaris"),
    description: textFrom(
      source,
      /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i,
      "Elaris creates verified, intentional introductions for people seeking a real relationship.",
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

export const legalSlugs = ["privacy", "terms", "delete-account", "grievance"] as const;
export type LegalSlug = (typeof legalSlugs)[number];

export function isLegalSlug(value: string): value is LegalSlug {
  return (legalSlugs as readonly string[]).includes(value);
}
