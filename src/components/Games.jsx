import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div className="cards text-center flex flex-col items-center" key={game.id}>
      <Link
        className="flex flex-col items-center w-full"
        to={`/games/${game.id}`}
        state={{ game }}
      >
        <div className="card-image w-full">
          <img src={game.background_image} alt="" className="card-image w-full object-cover" />
        </div>
        <p className=" bg-slate-700 bg-opacity-50">{game.name}</p>
      </Link>
    </div>
  );
}
