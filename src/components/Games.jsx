import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div
      className="cards text-center flex flex-col items-center"
      key={game.id}
    >
      <Link
        className="flex flex-col items-center"
        to={`/games/${game.id}`}
        state={{ game }}
      >
        <img
          src={game.background_image}
          alt=""
          className=" object-cover"
        />
        <p className=" bg-slate-700 bg-opacity-50">{game.name}</p>
      </Link>
    </div>
  );
}
