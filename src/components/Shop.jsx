import { url } from "../utils/api";
import { useEffect, useState, useContext} from "react";
import Games from "./Games";
import { CartAdd } from "./App"

export default function Shop() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext(CartAdd);
  

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
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-3 my-5 place-items-center">
        {games.map((game) => {
          return (
            <Card key={game.id}>
              <Games game={game} />
              <div className="flex justify-between items-center gap-3 m-2">
                <p>${Math.round(game.rating * 1000)/100 + 0.09}</p>
                <button onClick={() => addToCart(game)}>Add to cart</button>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function Card({ children }) {
  return (
    <article className="rounded-b-lg h-full bg-slate-700 w-3/4 flex flex-col justify-between">
      {children}
    </article>
  );
}
