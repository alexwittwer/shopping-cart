import { url } from "../utils/api";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Shop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      return data.results;
    }

    fetchData().then((results) => setGames(results));
  }, []);

  if (!games) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {games.map((game) => {
          return <Item key={game.id} game={game} />;
        })}
      </div>
    </>
  );
}
