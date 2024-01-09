import { Link } from "react-router-dom";
import { CartContents, CartDel } from "./App";
import { useContext, useMemo } from "react";

export default function Cart() {
  const cart = useContext(CartContents);
  const total = useMemo(
    () =>
      cart.reduce((subtotal, game) => {
        return subtotal + Math.round(game.rating * 1000) / 100;
      }, 0),
    [cart]
  );

  return (
    <CartWrapper>
      {cart.map((game) => (
        <CartItem key={game.id} game={game} />
      ))}
      <div className="flex justify-between px-3">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button onClick={() => alert("payment accepted")}>Checkout</button>
    </CartWrapper>
  );
}

function CartItem({ game }) {
  const deleteGame = useContext(CartDel);
  const price = (Math.round(game.rating * 1000) / 100).toFixed(2);

  return (
    <div className="flex sm:text-sm justify-between items-center bg-slate-700 p-2 gap-1 rounded-md w-full">
      {console.log(game)}
      <Link to={`/games/${game.id}`} state={{ game }}>
        <img
          src={game.background_image}
          className="max-w-16 lg:max-w-40"
          alt=""
        />
      </Link>
      <div>{game.name}</div>
      <div className="flex justify-evenly items-center gap-5">
        <div>${price}</div>
        <button
          className="text-xs md:text-base"
          onClick={() => deleteGame(game.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function CartWrapper({ children }) {
  return (
    <div className="w-full sm:m-4 flex justify-center items-center self-center">
      <div className="flex flex-col justify-center sm:w-full mx-3 md:mx-0 md:w-2/3">
        <h1>Shopping Cart</h1>
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
}
