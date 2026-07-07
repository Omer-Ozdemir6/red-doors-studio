import { games } from "../data/games";
import GameFeature from "./GameFeature";

function GameFeaturesSection() {
  return (
    <>
      {games.map((game, index) => (
        <GameFeature
          key={game.id}
          game={game}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
}

export default GameFeaturesSection;