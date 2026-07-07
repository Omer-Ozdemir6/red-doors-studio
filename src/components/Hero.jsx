import SplitText from "./SplitText";
import heroBg from "../assets/images/hero-bg.png";

function Hero() {
  const title = "FIRST SIGNAL OF BLOODY STORIES";

  return (
    <section
      data-hero
      data-scroll
      data-scroll-call="pb-row-hero"
      data-scroll-progress
      data-scroll-repeat="true"
      className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-5 py-24 text-center md:px-10"
    >
      <img
        data-hero-media
        data-scroll-speed="-1.6"
        data-scroll-target="[data-hero]"
        data-scroll-delay="0.45"
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <div
        data-reveal
        data-reveal-delay="0.05"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,0,0,0.15),rgba(0,0,0,0.88)_62%),linear-gradient(to_top,rgba(0,0,0,1),transparent_52%),linear-gradient(90deg,rgba(0,0,0,0.85),transparent_50%,rgba(0,0,0,0.85))]"
      />
      <div className="absolute inset-0 noise-flicker opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <h1
          data-hero-title
          className="mx-auto max-w-6xl text-6xl font-black uppercase leading-[0.82] md:text-8xl xl:text-[9rem]"
        >
          <SplitText text={title} reverseAlternate />
        </h1>

        <h2
          data-hero-ghost
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-[34%] text-6xl font-black uppercase leading-[0.82] text-transparent opacity-0 [-webkit-text-stroke:1px_rgba(255,255,255,0.55)] md:text-8xl xl:text-[9rem]"
        >
          <SplitText text={title} delay={180} reverseAlternate />
        </h2>

        <a
          data-hero-cta
          data-glitch
          href="#games"
          className="glitch-link relative z-10 mt-12 inline-flex items-center gap-4 border-b border-red-700 pb-3 text-xs font-black uppercase tracking-[0.32em] text-white opacity-0 transition hover:text-red-500"
        >
          <span className="grid h-10 w-10 place-items-center border border-white/25 text-red-600">
            Play
          </span>
          Play Reveal Trailer
        </a>
      </div>

      <a
        data-hero-scroll-label
        data-glitch
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 opacity-0 hover:text-white"
      >
        Red Doors
      </a>
    </section>
  );
}

export default Hero;
