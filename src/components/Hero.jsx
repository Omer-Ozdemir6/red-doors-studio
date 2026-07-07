import heroBg from "../assets/images/hero-bg.png";

function Hero() {
  const words = ["FIRST", "SIGNAL", "OF", "BLOODY", "STORIES"];

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
      <div data-hero-cinema className="hero-cinema-layer absolute inset-0 opacity-0" />
      <div data-hero-sweep className="hero-sweep-layer absolute inset-0 opacity-0" />
      <div data-hero-distortion className="hero-distortion-layer absolute inset-0 opacity-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,0,0,0.12),rgba(0,0,0,0.86)_64%),linear-gradient(to_top,rgba(0,0,0,1),transparent_48%),linear-gradient(90deg,rgba(0,0,0,0.84),transparent_50%,rgba(0,0,0,0.84))]" />
      <div className="absolute inset-0 noise-flicker opacity-35" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1920px] place-items-center">
        <h1
          data-hero-title
          className="hero-merge-title flex w-full items-center justify-center gap-5 text-3xl font-black uppercase leading-none text-white/90 sm:gap-7 md:gap-10 md:text-5xl xl:gap-14 xl:text-6xl 2xl:text-7xl"
        >
          {words.map((word, index) => (
            <span
              data-hero-word
              key={word}
              className="hero-merge-word"
              style={{ "--word-index": index }}
            >
              {word}
            </span>
          ))}
        </h1>

        <a
          data-hero-cta
          data-glitch
          href="#about"
          className="glitch-link absolute top-[calc(50%+3.7rem)] z-10 inline-flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-white opacity-0 transition hover:text-red-500 md:top-[calc(50%+4.5rem)]"
        >
          <span className="text-red-600">[</span>
          <span className="text-[0.7rem]">▶</span>
          Play Reveal Trailer
          <span className="text-red-600">]</span>
        </a>
      </div>

      <a
        data-hero-scroll-label
        data-glitch
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-xs font-black uppercase tracking-[0.3em] text-zinc-500 opacity-0 hover:text-white"
      >
        Red Doors
      </a>
    </section>
  );
}

export default Hero;
