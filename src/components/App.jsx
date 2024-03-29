import { useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

export const CartContents = createContext(null);
export const CartAdd = createContext(null);
export const CartDel = createContext(null);
export const SearchTerm = createContext(null);
export const UpdateSearchTerm = createContext(null);

function App() {
  const name = useLocation();
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

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

  function updateSearchTerm(string) {
    setSearchTerm(string);
  }

  return (
    <CartContents.Provider value={cart}>
      <CartAdd.Provider value={addToCart}>
        <CartDel.Provider value={delGame}>
          <UpdateSearchTerm.Provider value={updateSearchTerm}>
            <SearchTerm.Provider value={searchTerm}>
              <div className="flex flex-col justify-between min-h-screen">
                <Header />
                {name.pathname === "/" ? <Landing /> : ""}
                <Outlet />
                <Footer />
              </div>
            </SearchTerm.Provider>
          </UpdateSearchTerm.Provider>
        </CartDel.Provider>
      </CartAdd.Provider>
    </CartContents.Provider>
  );
}

export default App;
