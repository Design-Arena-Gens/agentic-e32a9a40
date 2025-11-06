"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, PlayCircle, PauseCircle } from "@phosphor-icons/react";
import clsx from "clsx";

export type Slide = {
  id: string;
  headline: string;
  kicker?: string;
  description?: string;
  points?: string[];
  metricCards?: {
    label: string;
    value: string;
    detail?: string;
  }[];
  visual?: React.ReactNode;
  footerNote?: string;
};

type SlideDeckProps = {
  slides: Slide[];
  autoAdvanceMs?: number;
};

export function SlideDeck({ slides, autoAdvanceMs = 15000 }: SlideDeckProps) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = slides.length;
  const current = slides[index] ?? slides[0];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((prev) => {
        const bounded = (nextIndex + totalSlides) % totalSlides;
        if (bounded !== prev) {
          return bounded;
        }
        return prev;
      });
    },
    [totalSlides]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(goNext, autoAdvanceMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPlaying, autoAdvanceMs]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        setIsPlaying(false);
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIsPlaying(false);
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <div className="deck-gradient flex min-h-screen flex-col gap-6 px-6 py-8 md:gap-10 md:px-10 md:py-10">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-saffron">Tourism of India</p>
          <h1 className="font-heading text-3xl font-semibold text-white md:text-4xl">
            Incredible India: Future-Ready Tourism Ecosystem
          </h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <button
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? <PauseCircle size={22} weight="duotone" /> : <PlayCircle size={22} weight="duotone" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <span>
            {index + 1}/{totalSlides}
          </span>
        </div>
      </header>

      <div className="grid flex-1 items-stretch gap-6 lg:grid-cols-[1fr,20rem] xl:grid-cols-[1fr,22rem]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0.5 backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="relative h-full rounded-[calc(theme(borderRadius.3xl)-0.25rem)] bg-slate-950/80 p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex h-full flex-col gap-6"
              >
                <div className="space-y-3">
                  {current.kicker && (
                    <p className="text-xs uppercase tracking-[0.25em] text-saffron">{current.kicker}</p>
                  )}
                  <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">{current.headline}</h2>
                  {current.description && <p className="text-lg text-white/80">{current.description}</p>}
                </div>

                {current.points && (
                  <ul className="grid gap-3 text-base text-white/80 md:grid-cols-2 md:gap-4">
                    {current.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-saffron" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {current.metricCards && (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {current.metricCards.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 via-transparent to-white/10 p-4 text-white/90"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{metric.label}</p>
                        <p className="mt-2 font-heading text-3xl font-semibold text-white">{metric.value}</p>
                        {metric.detail && <p className="mt-2 text-sm text-white/70">{metric.detail}</p>}
                      </div>
                    ))}
                  </div>
                )}

                {current.visual && <div className="mt-auto">{current.visual}</div>}

                {current.footerNote && (
                  <p className="mt-auto text-sm text-white/60">
                    <strong className="font-semibold text-white/70">Key takeaway: </strong>
                    {current.footerNote}
                  </p>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <nav className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            <ol className="divide-y divide-white/10">
              {slides.map((slide, slideIdx) => {
                const active = slideIdx === index;
                return (
                  <li key={slide.id}>
                    <button
                      className={clsx(
                        "flex w-full items-start gap-3 px-5 py-4 text-left transition",
                        active ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10"
                      )}
                      onClick={() => {
                        setIsPlaying(false);
                        goTo(slideIdx);
                      }}
                    >
                      <span className="mt-1 text-xs font-semibold tracking-[0.2em]">{String(slideIdx + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-heading text-base font-semibold">{slide.headline}</p>
                        {slide.description && (
                          <p className="mt-1 text-sm text-white/60">
                            {slide.description.length > 110
                              ? `${slide.description.slice(0, 107)}...`
                              : slide.description}
                          </p>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            <p className="font-heading text-lg text-white">Navigation</p>
            <p className="mt-2">Use ← and → keys or click slide titles. Auto-play can be paused anytime.</p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Previous slide"
                onClick={() => {
                  setIsPlaying(false);
                  goPrev();
                }}
              >
                <ArrowLeft size={20} weight="bold" />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Next slide"
                onClick={() => {
                  setIsPlaying(false);
                  goNext();
                }}
              >
                <ArrowRight size={20} weight="bold" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/60 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-saffron transition-all duration-500 ease-out"
              style={{ width: `${((index + 1) / totalSlides) * 100}%` }}
            />
          </div>
          <span>
            Slide {index + 1} of {totalSlides}
          </span>
        </div>
        <span className="text-white/50">Crafted for global investors & partners • {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
