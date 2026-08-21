"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

type PageExperienceProps = {
  bodyClass?: string;
};

export function PageExperience({ bodyClass = "" }: PageExperienceProps) {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const bodyClasses = ["home-page", "waitlist-page", "strategy-page", "motion-ready"];
    body.classList.remove(...bodyClasses);
    bodyClass
      .split(/\s+/)
      .filter(Boolean)
      .forEach((className) => body.classList.add(className));

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const header = document.querySelector<HTMLElement>("[data-header]");
    const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
    const mobileNav = document.querySelector<HTMLElement>("[data-nav-mobile]");
    const cleanup: Array<() => void> = [];

    let lastScrollY = window.scrollY;
    const onScroll = () => {
      if (!header) return;
      const currentScrollY = window.scrollY;
      header.classList.toggle("is-scrolled", currentScrollY > 8);

      if (currentScrollY <= 12 || currentScrollY < lastScrollY - 2) {
        header.classList.remove("is-hidden");
      } else if (currentScrollY > lastScrollY + 4) {
        header.classList.add("is-hidden");
      }

      lastScrollY = currentScrollY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup.push(() => window.removeEventListener("scroll", onScroll));

    const onToggle = () => {
      if (!toggle || !mobileNav) return;
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    };
    toggle?.addEventListener("click", onToggle);
    cleanup.push(() => toggle?.removeEventListener("click", onToggle));

    const closeMobileNav = () => {
      if (!toggle || !mobileNav) return;
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    };
    const mobileLinks = [...(mobileNav?.querySelectorAll("a") ?? [])];
    mobileLinks.forEach((link) => link.addEventListener("click", closeMobileNav));
    cleanup.push(() => mobileLinks.forEach((link) => link.removeEventListener("click", closeMobileNav)));

    const reveals = [...document.querySelectorAll<HTMLElement>(".reveal")];
    body.classList.add("motion-ready");
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
      );
      reveals.forEach((element) => revealObserver?.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add("is-visible"));
    }
    cleanup.push(() => revealObserver?.disconnect());

    const applyForm = document.querySelector<HTMLFormElement>("[data-apply-form]");
    const onSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (applyForm) {
        const data = new FormData(applyForm);
        track("waitlist_submit", {
          city: String(data.get("city") || ""),
          intent: String(data.get("intent") || ""),
          meetPreference: String(data.get("meetPreference") || ""),
          whyJoin: String(data.get("whyJoin") || ""),
        });
      }
      applyForm?.closest(".form-panel")?.classList.add("is-success");
      applyForm?.reset();
    };
    applyForm?.addEventListener("submit", onSubmit);
    cleanup.push(() => applyForm?.removeEventListener("submit", onSubmit));

    const onTrackedClick = (event: Event) => {
      const target = (event.currentTarget as HTMLElement | null)?.closest<HTMLElement>("[data-analytics]");
      if (!target?.dataset.analytics) return;
      track(target.dataset.analytics, {
        href: target.getAttribute("href") || undefined,
        meetMode: target.dataset.meetMode,
      });
    };
    const trackedClicks = [...document.querySelectorAll<HTMLElement>("[data-analytics]")];
    trackedClicks.forEach((element) => element.addEventListener("click", onTrackedClick));
    cleanup.push(() => trackedClicks.forEach((element) => element.removeEventListener("click", onTrackedClick)));

    const onTrackedChange = (event: Event) => {
      const target = event.currentTarget as HTMLInputElement | HTMLSelectElement | null;
      const analyticsEvent = target?.dataset.analyticsChange;
      if (!target || !analyticsEvent) return;
      track(analyticsEvent, { value: target.value });
    };
    const trackedFields = [...document.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[data-analytics-change]")];
    trackedFields.forEach((element) => element.addEventListener("change", onTrackedChange));
    cleanup.push(() => trackedFields.forEach((element) => element.removeEventListener("change", onTrackedChange)));

    let viewObserver: IntersectionObserver | undefined;
    const viewed = new Set<string>();
    const viewTargets = [...document.querySelectorAll<HTMLElement>("[data-analytics-view]")];
    if ("IntersectionObserver" in window && viewTargets.length) {
      viewObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            const eventName = element.dataset.analyticsView;
            if (!eventName) return;
            const key = `${eventName}:${element.dataset.meetMode || element.id || ""}`;
            if (viewed.has(key)) return;
            viewed.add(key);
            track(eventName, { meetMode: element.dataset.meetMode, id: element.id || undefined });
            viewObserver?.unobserve(element);
          });
        },
        { threshold: 0.35 },
      );
      viewTargets.forEach((element) => viewObserver?.observe(element));
    }
    cleanup.push(() => viewObserver?.disconnect());

    const whyShowcase = document.querySelector<HTMLElement>("[data-why-showcase]");
    let whyObserver: IntersectionObserver | undefined;
    let whyTimer: number | undefined;
    if (whyShowcase) {
      const chapters = [...whyShowcase.querySelectorAll<HTMLElement>("[data-why-chapter]")];
      const shots = [...whyShowcase.querySelectorAll<HTMLElement>("[data-why-shot]")];
      const kicker = whyShowcase.querySelector<HTMLElement>("[data-why-kicker]");
      let active = 0;
      let paused = false;

      const setActive = (index: number) => {
        if (!chapters.length || !shots.length) return;
        active = ((index % chapters.length) + chapters.length) % chapters.length;
        chapters.forEach((element, itemIndex) => element.classList.toggle("is-active", itemIndex === active));
        shots.forEach((element, itemIndex) => element.classList.toggle("is-active", itemIndex === active));
        if (kicker) {
          const number = chapters[active].querySelector(".why-chapter-num")?.textContent?.trim() ?? "";
          const title = chapters[active].querySelector(".why-chapter-title")?.textContent?.trim() ?? "";
          kicker.textContent = `${number} · ${title}`;
        }
      };

      const stopAuto = () => {
        if (whyTimer) window.clearInterval(whyTimer);
        whyTimer = undefined;
      };
      const startAuto = () => {
        stopAuto();
        if (prefersReduced || chapters.length < 2) return;
        whyTimer = window.setInterval(() => {
          if (!paused) setActive(active + 1);
        }, 4200);
      };

      const chapterCleanups = chapters.map((chapter, index) => {
        const enter = () => {
          paused = true;
          setActive(index);
        };
        const leave = () => {
          paused = false;
        };
        chapter.addEventListener("pointerenter", enter);
        chapter.addEventListener("focus", enter);
        chapter.addEventListener("pointerleave", leave);
        return () => {
          chapter.removeEventListener("pointerenter", enter);
          chapter.removeEventListener("focus", enter);
          chapter.removeEventListener("pointerleave", leave);
        };
      });
      cleanup.push(...chapterCleanups);

      if ("IntersectionObserver" in window) {
        whyObserver = new IntersectionObserver(
          (entries) => entries.forEach((entry) => (entry.isIntersecting ? startAuto() : stopAuto())),
          { threshold: 0.35 },
        );
        whyObserver.observe(whyShowcase);
      } else {
        startAuto();
      }
      setActive(0);
    }

    return () => {
      cleanup.forEach((dispose) => dispose());
      if (whyTimer) window.clearInterval(whyTimer);
      whyObserver?.disconnect();
      header?.classList.remove("is-hidden", "is-scrolled");
      body.classList.remove(...bodyClasses);
    };
  }, [bodyClass, pathname]);

  return null;
}
