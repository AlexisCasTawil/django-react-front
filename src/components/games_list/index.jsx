import { useEffect, useState } from "react";
import { getData } from "../services/api_rest";
import { GamesCard } from "./GamesCard";

export const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesList();
  }, []);

  async function getGamesList() {
    try {
      const data = await getData();
      setGames(data.games);
      console.log(data.games);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container container-flui text-center text-white row">
      <h3>Games list</h3>
      {games.map((game) => (
        <GamesCard key={game.id} game={game} getGamesList={getGamesList} />
      ))}
    </section>
  );
};
