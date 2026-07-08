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
      className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-black px-4 py-20 text-center sm:px-5 md:min-h-screen md:px-10 md:py-24"
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
          className="hero-merge-title flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[clamp(1.75rem,11vw,3.2rem)] font-black uppercase leading-none text-white/90 sm:gap-x-7 md:flex-nowrap md:gap-10 md:text-5xl xl:gap-14 xl:text-6xl 2xl:text-7xl"
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
          className="glitch-link absolute top-[calc(50%+5.5rem)] z-10 inline-flex items-center gap-3 font-mono text-[0.65rem] font-black uppercase tracking-[0.12em] text-white opacity-0 transition hover:text-red-500 md:top-[calc(50%+4.5rem)] md:text-xs"
        >
          <span className="text-red-600">[</span>
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
