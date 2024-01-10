import { useContext, useEffect, useState } from "react";
import { CartAdd, CartContents, CartDel, SearchTerm } from "./App";
import { CardWrapper, Card, ShopNav } from "./Shop";
import Games from "./Games";
import Loading from "./Loading";

export default function SearchResults() {
  const searchTerm = useContext(SearchTerm);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext(CartAdd);
  const delGame = useContext(CartDel);
  const cart = useContext(CartContents);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);

    console.log(data);

    return data;
  }

  useEffect(() => {
    setLoading(true);
    fetchData(searchTerm)
      .then((results) => {
        setGames(results);
      })
      .catch((error) => console.warn(error));
  }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="text-center">{games.count} results</div>
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
