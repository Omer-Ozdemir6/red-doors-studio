function GameFeature({ game, reverse = false }) {
  return (
    <section id={game.id} className={`gameFeature ${reverse ? "reverse" : ""}`}>
      <div className="gameFeatureVisual">
        <span>{game.code}</span>
      </div>

      <div className="gameFeatureContent">
        <p className="eyebrow">{game.genre}</p>
        <h2>{game.title}</h2>
        <h3>{game.tagline}</h3>
        <p>{game.description}</p>

        <div className="gameMeta">
          <small>{game.status}</small>
          <small>{game.genre}</small>
        </div>
      </div>
    </section>
  );
}

export default GameFeature;