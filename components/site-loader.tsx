"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Full-screen brand loader — peach diamond open sequence.
 */
export function SiteLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const intro = document.querySelector<HTMLElement>("[data-intro]");
    if (!intro) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let timer: number | undefined;
    const sessionKey = "aynera-loader-played";

    const finishIntro = () => {
      intro.classList.add("is-done");
      body.classList.remove("has-intro");
      body.classList.add("intro-complete");
    };

    const restartAnimations = () => {
      intro
        .querySelectorAll<HTMLElement>(
          ".intro-logo, .intro-brand, .intro-line, .pd-loader-bar-fill, .pd-loader-ripple",
        )
        .forEach((element) => {
          element.style.animation = "none";
          void element.offsetWidth;
          element.style.animation = "";
        });
    };

    const playIntro = () => {
      if (prefersReduced) {
        finishIntro();
        return;
      }
      intro.classList.remove("is-done");
      restartAnimations();
      body.classList.add("has-intro");
      body.classList.remove("intro-complete");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(finishIntro, 4200);
    };

    let alreadyPlayed = false;
    try {
      alreadyPlayed = window.sessionStorage.getItem(sessionKey) === "1";
    } catch {
      alreadyPlayed = false;
    }

    if (alreadyPlayed) {
      finishIntro();
    } else {
      playIntro();
      try {
        window.sessionStorage.setItem(sessionKey, "1");
      } catch {
        /* ignore */
      }
    }

    const brand = document.querySelector<HTMLElement>("[data-replay-intro]");
    const onBrandClick = (event: Event) => {
      if (pathname !== "/") return;
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      playIntro();
    };
    brand?.addEventListener("click", onBrandClick);

    return () => {
      if (timer) window.clearTimeout(timer);
      brand?.removeEventListener("click", onBrandClick);
    };
  }, [pathname]);

  return (
    <div className="site-intro pd-loader" data-intro aria-hidden="true">
      <div className="pd-loader-glow" aria-hidden />

      <div className="intro-stage pd-loader-stage">
        <div className="pd-loader-mark">
          <span className="pd-loader-core" aria-hidden />
          <span className="pd-loader-ripple" aria-hidden />
          <span className="pd-loader-ripple pd-loader-ripple-2" aria-hidden />
          <span className="pd-loader-ripple pd-loader-ripple-3" aria-hidden />
          <img className="intro-logo" src="/logo-mark.svg" alt="" width={88} height={88} />
        </div>

        <p className="intro-brand pd-loader-brand">
          <span className="pd-logo-ayn">AYN</span>
          <span className="pd-logo-era">ERA</span>
        </p>
        <p className="intro-line pd-loader-line">The Era of Togetherness</p>

        <div className="pd-loader-bar" aria-hidden>
          <span className="pd-loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
