import Navbar from "./Navbar";
import Footer from "./Footer";
import { games } from "../data/games";

function StoreBadge({ label }) {
  return (
    <a data-glitch href="#contact" className="store-badge glitch-link">
      <span className="store-badge-icon">{label === "Android" ? "GP" : "iOS"}</span>
      <span>
        <small>{label === "Android" ? "Get it on" : "Download on the"}</small>
        {label === "Android" ? "Google Play" : "App Store"}
      </span>
    </a>
  );
}

function GamePage() {
  const slug = window.location.pathname.split("/").filter(Boolean).at(-1);
  const game = games.find((item) => item.id === slug) || games[0];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-700 selection:text-white">
      <Navbar />

      <section className="game-page-hero">
        <img src={game.image} alt="" className="game-page-hero-bg" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,.84)_72%,#000)]" />
        <div className="absolute inset-0 scanlines opacity-20" />
        <div className="game-page-hero-content">
          <p data-reveal data-reveal-style="type" className="game-detail-kicker">
            Games / {game.title}
          </p>
          <h1 data-reveal data-reveal-style="row" className="game-page-title">
            {game.title}
          </h1>
          <p data-reveal data-reveal-style="row" className="game-page-intro">
            {game.detailIntro}
          </p>
        </div>
        <div className="game-store-dock">
          {game.platforms.map((platform) => (
            <StoreBadge key={platform} label={platform} />
          ))}
        </div>
      </section>

      <section className="game-info-grid">
        <p data-reveal data-reveal-style="row" className="game-info-label">
          General Info
        </p>
        <dl data-reveal data-reveal-style="row" className="game-info-list">
          <div>
            <dt>Release</dt>
            <dd>{game.release}</dd>
          </div>
          <div>
            <dt>Genre</dt>
            <dd>{game.genre}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{game.status}</dd>
          </div>
        </dl>
      </section>

      <div className="game-ticker" aria-hidden="true">
        <span>What they are saying about us. What they are saying about us.</span>
      </div>

      <section className="game-beats">
        {game.beats.map((beat, index) => (
          <article
            data-reveal
            data-reveal-style={index % 2 === 0 ? "row" : "form"}
            className="game-beat"
            key={beat.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{beat.title}</h2>
            <p>{beat.text}</p>
          </article>
        ))}
      </section>

      <section className="game-gallery">
        {game.gallery.map((image, index) => (
          <figure
            data-reveal
            data-reveal-style={index % 2 === 0 ? "row" : "form"}
            className="game-gallery-item"
            key={`${game.id}-gallery-${index}`}
          >
            <img src={image} alt="" />
          </figure>
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default GamePage;
