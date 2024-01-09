import { useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing"

export const CartContents = createContext(null);
export const CartAdd = createContext(null);
export const CartDel = createContext(null);

function App() {
  const name = useLocation();
  const [cart, setCart] = useState([]);

  function addToCart(game) {
    setCart([...cart, game]);
  }

  function delGame(gameid) {
    const newCart = cart.filter((game) => game.id !== gameid);
    setCart(newCart);
  }

  console.log(name);

  return (
    <CartContents.Provider value={cart}>
      <CartAdd.Provider value={addToCart}>
        <CartDel.Provider value={delGame}>
          <div className="flex flex-col justify-between min-h-screen">
            <Header />
            {name.pathname === "/" ? <Landing /> : ""}
            <Outlet />
            <Footer />
          </div>
        </CartDel.Provider>
      </CartAdd.Provider>
    </CartContents.Provider>
  );
}

export default App;
