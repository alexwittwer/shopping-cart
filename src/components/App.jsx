import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const CartContents = createContext(null);
export const CartAdd = createContext(null);
const CartDel = createContext(null);

function App() {
  const [cart, setCart] = useState({});
  

  function addToCart(game) {
   return setCart(...cart, game)
  }


  return (
  <CartContents.Provider value={cart} >
   <CartAdd.Provider value = {addToCart} >
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
   </CartAdd.Provider>
  </CartContents.Provider>
  );
}

export default App;
