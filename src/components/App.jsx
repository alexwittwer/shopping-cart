import { useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

export const CartContents = createContext(null);
export const CartAdd = createContext(null);
export const CartDel = createContext(null);
export const SearchFunc = createContext(null);
export const SearchRes = createContext(null);

function App() {
  const name = useLocation();
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);

  function addToCart(game) {
    const gameInCart = cart.some((item) => item.id === game.id);
    if (gameInCart) {
      alert("Cannot add game: Already in cart");
    } else {
      setCart([...cart, game]);
    }
  }

  function delGame(gameid) {
    const newCart = cart.filter((game) => game.id !== gameid);
    setCart(newCart);
  }

  function supplySearch(games) {
    setSearch(games);
  }

  return (
    <CartContents.Provider value={cart}>
      <CartAdd.Provider value={addToCart}>
        <CartDel.Provider value={delGame}>
          <SearchFunc.Provider value={supplySearch}>
            <SearchRes.Provider value={search}>
              <div className="flex flex-col justify-between min-h-screen">
                <Header />
                {name.pathname === "/" ? <Landing /> : ""}
                <Outlet />
                <Footer />
              </div>
            </SearchRes.Provider>
          </SearchFunc.Provider>
        </CartDel.Provider>
      </CartAdd.Provider>
    </CartContents.Provider>
  );
}

export default App;
