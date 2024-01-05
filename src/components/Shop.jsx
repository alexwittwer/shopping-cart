import { url } from "../utils/api";
import { useEffect, useState } from "react";
import Games from "./Games";

export default function Shop() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      return data.results;
    }

    fetchData()
      .then((results) => setGames(results))
      .catch((error) => console.warn(error))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <div className="circle-spin-2 self-center place-self-center"></div>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-1">
        {games.map((game) => {
          return <Games key={game.id} game={game} />;
        })}
      </div>
    </>
  );
}
