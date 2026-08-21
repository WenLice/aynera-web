"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const VIDEO_SRC = "/media/journey-cta.mp4";
const POSTER_SRC = "/media/journey-cta.png";

/**
 * Site A pattern (poster + muted loop video) with Peach Diamond chrome.
 * Add `public/media/journey-cta.mp4` to enable the loop; poster-only until then.
 */
export function HomeJourneyCta() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLAnchorElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready || failed) return;

    if (inView) {
      const play = video.play();
      if (play && typeof play.then === "function") {
        play
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }, [failed, inView, ready]);

  const togglePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const video = videoRef.current;
    if (!video || !ready || failed) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const showVideoUi = ready && !failed;

  return (
    <Link
      ref={rootRef}
      href="/how-it-works"
      className={`pd-journey${playing ? " is-playing" : ""}${showVideoUi ? " has-video" : ""}`}
      data-analytics="hero_secondary_cta"
    >
      <div className="pd-journey-media" aria-hidden="true">
        <img
          className="pd-journey-poster"
          src={POSTER_SRC}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
        />
        {!failed ? (
          <video
            ref={videoRef}
            className="pd-journey-video"
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER_SRC}
            onLoadedData={() => setReady(true)}
            onError={() => setFailed(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : null}
        <div className="pd-journey-veil" />
        <div className="pd-journey-grain" />
      </div>

      <div className="pd-journey-frame" aria-hidden />

      <span className="pd-journey-copy">
        <span className="pd-journey-kicker">
          <span className="pd-facet-mark" />
          Join, discover, meet, return
        </span>
        <span className="pd-journey-title">
          How Aynera works
          <span className="pd-journey-arrow" aria-hidden>
            →
          </span>
        </span>
        <span className="pd-journey-hint">
          {showVideoUi
            ? "A quiet loop of the path — tap through for the full walkthrough"
            : "See the full walkthrough"}
        </span>
      </span>

      {showVideoUi ? (
        <button
          type="button"
          className="pd-journey-toggle"
          aria-label={playing ? "Pause preview video" : "Play preview video"}
          onClick={togglePlay}
        >
          <span className="pd-journey-toggle-mark" aria-hidden>
            {playing ? "II" : "▶"}
          </span>
        </button>
      ) : null}
    </Link>
  );
}
