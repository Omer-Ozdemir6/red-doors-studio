import { games } from "../data/games";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";

function GamePanel({ game, index }) {
  const reversed = index % 2 === 1;

  return (
    <article
      data-game-panel
      data-scroll
      data-scroll-call="game-panel"
      data-scroll-progress
      data-scroll-repeat="true"
      id={game.id}
      className="group relative min-h-screen overflow-hidden border-y border-white/10"
    >
      <img
        data-game-bg
        data-scroll-speed="-2"
        data-scroll-target={`#${game.id}`}
        data-scroll-delay="0.35"
        src={game.image}
        alt=""
        className="absolute -inset-y-[18%] left-0 h-[136%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.54)_48%,rgba(0,0,0,0.9)),linear-gradient(to_top,rgba(0,0,0,1),transparent_56%)]" />
      <div className="absolute inset-0 noise-flicker opacity-25" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-end px-5 py-16 md:px-10 md:py-20">
        <div
          className={`grid w-full gap-8 md:grid-cols-[0.45fr_0.55fr] md:items-end ${
            reversed ? "md:[direction:rtl]" : ""
          }`}
        >
          <div className={reversed ? "md:[direction:ltr]" : ""}>
            <div
              data-game-media
              className="aspect-[4/5] max-h-[560px] overflow-hidden border border-white/15 bg-black/50"
            >
              <img
                data-game-poster
                src={game.image}
                alt=""
                className="h-full w-full object-cover opacity-85 transition duration-1000 group-hover:scale-110 group-hover:rotate-[-2deg]"
              />
            </div>
          </div>

          <div className={`max-w-3xl ${reversed ? "md:[direction:ltr]" : ""}`}>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-red-600">
              <SplitText text={game.eyebrow} delay={120} />
            </p>
            <SectionReveal delay={0.14}>
              <p className="mb-3 text-lg font-black uppercase tracking-[0.28em] text-white/60">
                {game.code}
              </p>
              <h3 className="mb-6 text-6xl font-black uppercase leading-none md:text-8xl xl:text-[8.5rem]">
                <SplitText text={game.title} delay={180} reverseAlternate />
              </h3>
            </SectionReveal>
            <SectionReveal delay={0.28}>
              <p className="mb-5 text-2xl font-black uppercase leading-tight text-white md:text-4xl">
                {game.tagline}
              </p>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
                {game.description}
              </p>
            </SectionReveal>
            <SectionReveal delay={0.42}>
              <div className="mb-8 flex flex-wrap gap-3">
                {[game.code, game.genre, game.status].map((item) => (
                  <span
                    key={item}
                    className="border border-white/20 bg-black/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                data-glitch
                href={`#${game.id}`}
                className="glitch-link inline-flex border border-red-700 bg-red-700 px-6 py-4 text-xs font-black uppercase tracking-[0.28em] transition hover:bg-red-800"
              >
                Learn More
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </article>
  );
}

function GamesSection() {
  return (
    <section id="games" className="bg-black">
      <div>
        {games.map((game, index) => (
          <GamePanel key={game.id} game={game} index={index} />
        ))}
      </div>

      <SectionReveal className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-3xl font-black uppercase leading-none md:text-6xl">
          <SplitText text={`Explore All Games (${games.length})`} reverseAlternate />
        </p>
        <a
          data-glitch
          href="#contact"
          className="glitch-link w-fit border-b border-red-700 pb-2 text-xs font-black uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
        >
          Contact Studio
        </a>
      </SectionReveal>
    </section>
  );
}

export default GamesSection;
