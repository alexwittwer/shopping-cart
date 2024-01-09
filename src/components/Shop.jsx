import { popular, recent, upcoming } from "../utils/api";
import { useEffect, useState, useContext } from "react";
import Games from "./Games";
import { CartAdd } from "./App";

export default function Shop() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext(CartAdd);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);

    return data;
  }

  useEffect(() => {
    fetchData(popular)
      .then((results) => {
        setGames(results);
      })
      .catch((error) => console.warn(error))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <div className="circle-spin-2 self-center place-self-center"></div>;
  }

  return (
    <main>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => {
            setLoading(true)
            fetchData(recent).then((results) => setGames(results));
          }}
        >
          Recent
        </button>
        <button
          onClick={() => {
            setLoading(true)
            fetchData(popular).then((results) => setGames(results));
          }}
        >
          Popular
        </button>
        <button
          onClick={() => {
            setLoading(true)
            fetchData(upcoming).then((results) => setGames(results));
          }}
        >
          Upcoming
        </button>
      </div>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-3 my-5 place-items-center">
        {games.results &&
          games.results.map((game) => {
            return (
              <Card key={game.id}>
                <Games game={game} />
                <div className="flex justify-between items-center gap-3 m-2">
                  <p>
                    ${(Math.round(game.rating * 1000) / 100 + 0.09).toFixed(2)}
                  </p>
                  <button onClick={() => addToCart(game)}>Add to cart</button>
                </div>
              </Card>
            );
          })}
      </div>
      <nav className="flex justify-center gap-5 my-3">
        <button
          onClick={() => {
            if (games.previous) {
              setLoading(true);
              fetchData(games.previous).then((results) => setGames(results));
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (games.next) {
              setLoading(true);
              fetchData(games.next).then((results) => setGames(results));
            }
          }}
        >
          Next
        </button>
      </nav>
    </main>
  );
}

function Card({ children }) {
  return (
    <article className="rounded-b-lg h-full bg-slate-700 w-3/4 flex flex-col justify-between">
      {children}
    </article>
  );
}
