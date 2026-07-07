function GameCard({ game }) {
  return (
    <article
      className={`gameCard ${game.theme}`}
      style={{ backgroundImage: `url(${game.image})` }}
    >
      <div className="gameCardOverlay" />

      <div>
        <span>{game.code}</span>
        <h3>{game.title}</h3>
        <h4>{game.tagline}</h4>
        <p>{game.description}</p>
      </div>

      <div className="gameBottom">
        <div className="gameMeta">
          <small>{game.genre}</small>
          <small>{game.status}</small>
        </div>

        <a href={`#${game.id}`} className="gameLink">
          Explore
        </a>
      </div>
    </article>
  );
}

export default GameCard;