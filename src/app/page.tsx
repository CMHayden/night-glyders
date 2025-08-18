"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current!;
    if (!el) return;

    const tick = () => {
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / r.height, 0), 1); // 0..1 as hero scrolls out
      const h = r.height;

      // only move the background (slow parallax)
      el.style.setProperty("--bg-y", `${-0.18 * p * h}px`);
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    const onResize = () => tick();
    window.addEventListener("resize", onResize);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        ref={ref}
        className="relative w-full overflow-clip bg-[#0b1440] h-[110svh]"
      >
        {/* Trees background (slow) */}
        <div
          style={{ transform: "translate3d(0,var(--bg-y),0)", filter: "grayscale(40%)" }}
          className="pointer-events-none absolute left-0 right-0 top-[-20%] bottom-[-20%]
                     bg-cover bg-center bg-no-repeat
                     bg-[url('/images/assets/bg-mobile.png')]
                     sm:bg-[url('/images/assets/bg.png')]
                     z-0"
          aria-hidden
        />

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-8">
          <h1 className="text-white font-black [font-size:clamp(28px,5vw,64px)] leading-none">
            NIGHT GLYDERS
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            NightGlyders is a next-generation digital movement…
          </p>
        </div>

        {/* GLYDER — bottom aligned, normal scroll speed */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30
                    flex justify-center items-end h-[58svh]"  // height = how much of the sprite can sit in the hero
          aria-hidden
        >
          <Image
            src="/images/traits/Body/Bear Brown.png"
            alt="Glyder"
            width={900}
            height={900}
            className="w-[min(88vw,900px)] h-auto [image-rendering:pixelated]
                      drop-shadow-[0_0_60px_rgba(64,87,255,0.35)]"
            priority
          />
        </div>

        {/* MIST — separate layer, above the glyder */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40"
          aria-hidden
        >
          <div className="h-[56svh] bg-[linear-gradient(to_top,rgba(11,20,64,0.98)_0%,rgba(11,20,64,0.75)_38%,rgba(11,20,64,0)_100%)]" />
        </div>

      </section>

      {/* NEXT SECTION (normal flow). No negative margin. Same base color to match fog bottom. */}
      <section className="bg-[#0b1440] h-[300vh] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold">About Night Glyders</h2>
          <p className="mt-3 text-white/80">
            NightGlyders is a next-generation digital movement built at the intersection of art, identity, and
            technology.
          </p>
          <p className="mt-3 text-white/80">
            Born on ApeChain, it began with a collection, but quickly became something much greater: a
            community of creators, thinkers, and builders united by a shared belief in ownership, innovation,
            and collective momentum.
          </p>
          <p className="mt-3 text-white/80">
            At its core, NightGlyders is about freedom; the freedom to build your brand, tell your story, and
            participate in a rapidly evolving digital landscape. Every Glyder is a symbol of individuality, but
            the real power lies in the network. Together, our holders form an active, connected community
            that collaborates, supports, and grows together.
          </p>
        </div>
      </section>
    </>
  );
}
