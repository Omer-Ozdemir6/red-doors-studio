import { useState } from "react";
import { games } from "../data/games";

function GamePanel({ game, index }) {
  const reversed = index % 2 === 1;
  const [leaving, setLeaving] = useState(false);
  const gameUrl = `/games/${game.id}/`;

  const openGame = (event) => {
    event.preventDefault();
    if (leaving) return;

    setLeaving(true);
    window.setTimeout(() => {
      window.location.href = gameUrl;
    }, 320);
  };

  return (
    <article
      data-game-panel
      data-scroll
      data-scroll-call="game-panel"
      data-scroll-progress
      data-scroll-repeat="false"
      id={game.id}
      className={`game-showcase group relative overflow-hidden bg-black ${leaving ? "is-leaving" : ""}`}
    >
      <img
        data-game-bg
        data-scroll-speed="-1.4"
        data-scroll-target={`#${game.id}`}
        data-scroll-delay="0.45"
        src={game.image}
        alt=""
        className="game-showcase-bg absolute left-0 top-0 h-[72vh] w-full object-cover"
      />
      <div className="game-page-preview" aria-hidden="true">
        <img src={game.image} alt="" />
        <div className="game-page-preview-copy">
          <span>{game.genre}</span>
          <strong>{game.title}</strong>
        </div>
      </div>
      <div data-game-bg-shade className="game-showcase-shade absolute inset-0" />
      <div className="absolute inset-0 scanlines opacity-15" />

      <div className="relative z-10 mx-auto grid min-h-[125vh] max-w-[1680px] grid-rows-[0.55fr_0.45fr] px-5 pb-20 pt-[46vh] md:px-10">
        <div
          className={`grid gap-10 md:grid-cols-[0.56fr_0.44fr] md:items-end ${
            reversed ? "md:[direction:rtl]" : ""
          }`}
        >
          <a
            href={gameUrl}
            data-game-media
            className={`game-media-card aspect-[16/10] w-full max-w-3xl overflow-hidden bg-zinc-950 ${
              reversed ? "md:[direction:ltr]" : ""
            }`}
          >
            <img
              data-game-poster
              src={game.image}
              alt=""
              className="h-[116%] w-full object-cover opacity-95"
            />
            <span className="game-media-hint">Open</span>
          </a>

          <div
            data-game-copy
            className={`rb-game-copy max-w-2xl pb-8 ${reversed ? "md:[direction:ltr]" : ""}`}
          >
            <p data-game-eyebrow className="type-reveal rb-game-eyebrow mb-8">
              {game.tagline}
            </p>
            <h3 data-game-heading className="rb-game-title mb-8">
              {game.title}
            </h3>
            <p data-game-description className="rb-game-description mb-8 max-w-xl">
              {game.description}
            </p>
            <a
              data-game-link
              data-glitch
              href={gameUrl}
              onClick={openGame}
              className="game-open-trigger glitch-link rb-game-link inline-flex items-center gap-3"
            >
              <span className="text-red-600">[</span>
              Learn more
              <span className="text-red-600">]</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function GamesSection() {
  return (
    <section id="games" className="relative z-10 bg-black">
      {games.map((game, index) => (
        <GamePanel key={game.id} game={game} index={index} />
      ))}
    </section>
  );
}

export default GamesSection;
