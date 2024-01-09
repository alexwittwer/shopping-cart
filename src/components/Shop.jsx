import { popular, recent, upcoming } from "../utils/api";
import { useEffect, useState, useContext } from "react";
import Games from "./Games";
import { CartContents, CartAdd, CartDel } from "./App";
import Loading from "./Loading";

export default function Shop() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext(CartAdd);
  const delGame = useContext(CartDel);
  const cart = useContext(CartContents);
  const params = { popular, recent, upcoming };

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);

    return data;
  }

  useEffect(() => {
    fetchData(params.popular)
      .then((results) => {
        setGames(results);
      })
      .catch((error) => console.warn(error));
  }, [params.popular]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <NavButtons
        setGames={setGames}
        fetchData={fetchData}
        setLoading={setLoading}
        params={params}
      />
      <CardWrapper>
        {games.results &&
          games.results.map((game) => {
            return (
              <Card key={game.id}>
                <Games
                  game={game}
                  delGame={delGame}
                  addToCart={addToCart}
                  cart={cart}
                />
              </Card>
            );
          })}
      </CardWrapper>
      <ShopNav
        games={games}
        setLoading={setLoading}
        fetchData={fetchData}
        setGames={setGames}
      />
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

function CardWrapper({ children }) {
  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-3 my-5 place-items-center">
      {" "}
      {children}{" "}
    </div>
  );
}

function NavButtons({ setLoading, fetchData, setGames, params }) {
  const { recent, popular, upcoming } = params;
  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={() => {
          setLoading(true);
          fetchData(recent).then((results) => setGames(results));
        }}
      >
        Recent
      </button>
      <button
        onClick={() => {
          setLoading(true);
          fetchData(popular).then((results) => setGames(results));
        }}
      >
        Popular
      </button>
      <button
        onClick={() => {
          setLoading(true);
          fetchData(upcoming).then((results) => setGames(results));
        }}
      >
        Upcoming
      </button>
    </div>
  );
}

function ShopNav({ games, setLoading, fetchData, setGames }) {
  return (
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
  );
}
