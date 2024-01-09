import { Link } from "react-router-dom";

export default function Game({ game, cart, addToCart, delGame }) {
  return (
    <>
      <div
        className="cards text-center flex flex-col items-center"
        key={game.id}
      >
        <Link
          className="flex flex-col items-center w-full"
          to={`/games/${game.id}`}
          state={{ game }}
        >
          <div className="card-image w-full">
            <img
              src={game.background_image}
              alt=""
              className="card-image w-full object-cover"
            />
          </div>
          <p className=" bg-slate-700 bg-opacity-50">{game.name}</p>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-3 m-2">
        <p>${(Math.round(game.rating * 1000) / 100 + 0.09).toFixed(2)}</p>
        {cart.some((item) => item.id === game.id) ? (
          <button onClick={() => delGame(game.id)}>Remove from Cart</button>
        ) : (
          <button onClick={() => addToCart(game)}>Add to cart</button>
        )}
      </div>
    </>
  );
}
