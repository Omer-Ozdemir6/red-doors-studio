import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "./SplitText";

function BootIntro({ onComplete }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete,
      });

      tl.set(document.body, { overflow: "hidden" })
        .fromTo("[data-boot-frame]", { clipPath: "inset(50% 0 50% 0)" }, { clipPath: "inset(0% 0 0% 0)", duration: 0.7, ease: "expo.out" })
        .fromTo("[data-boot-kicker]", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.25")
        .fromTo("[data-boot-logo]", { autoAlpha: 0, letterSpacing: "0.75em", filter: "blur(10px)" }, { autoAlpha: 1, letterSpacing: "0.28em", filter: "blur(0px)", duration: 0.8 }, "-=0.12")
        .to("[data-boot-logo]", { color: "#ef4444", duration: 0.08, repeat: 3, yoyo: true, ease: "steps(1)" }, "-=0.18")
        .fromTo("[data-boot-line]", { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: "power2.inOut" }, "-=0.18")
        .fromTo("[data-boot-status]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.45")
        .to("[data-boot-status]", { autoAlpha: 0.45, duration: 0.08, repeat: 2, yoyo: true, ease: "steps(1)" })
        .to(root, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", duration: 0.75, delay: 0.35, ease: "expo.inOut" })
        .set(document.body, { overflow: "" });
    }, root);

    return () => {
      gsap.set(document.body, { overflow: "" });
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      data-boot-intro
      className="fixed inset-0 z-[10000] grid place-items-center overflow-hidden bg-black px-5 text-white"
    >
      <div data-boot-frame className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,0,0,0.24),transparent_36%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_24%,rgba(90,0,0,0.16)_76%)]" />
      <div className="absolute inset-0 scanlines opacity-30" />
      <div className="absolute inset-0 noise-flicker opacity-30" />

      <section className="relative z-10 grid w-full max-w-5xl gap-8 text-center">
        <p data-boot-kicker className="text-xs font-black uppercase tracking-[0.45em] text-red-600 opacity-0">
          Red Doors Studio
        </p>
        <h1 data-boot-logo className="text-5xl font-black uppercase leading-none opacity-0 md:text-8xl">
          <SplitText text="Red Doors" reverseAlternate />
        </h1>
        <div className="mx-auto h-px w-full max-w-xl overflow-hidden bg-white/10">
          <div data-boot-line className="h-full origin-left scale-x-0 bg-red-600" />
        </div>
        <p data-boot-status className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500 opacity-0">
          Initializing fear engine
        </p>
      </section>
    </div>
  );
}

export default BootIntro;
