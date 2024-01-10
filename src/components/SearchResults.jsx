import { useContext } from "react";
import { CartAdd, CartContents, CartDel, SearchRes } from "./App";
import { CardWrapper, Card } from "./Shop";
import Games from "./Games";

export default function SearchResults() {
  const games = useContext(SearchRes);
  const addToCart = useContext(CartAdd);
  const delGame = useContext(CartDel);
  const cart = useContext(CartContents);

  return (
    <main>
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
    </main>
  );
}
