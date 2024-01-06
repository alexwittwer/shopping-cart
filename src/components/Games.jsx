import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div
      className="cards text-center flex flex-col items-center my-3"
      key={game.id}
    >
      <Link to={`/games/${game.id}`} state = {{game}} >
        <img src={game.background_image} alt="" className="max-w max-w-52" />
        <p>{game.name}</p>
      </Link>
    </div>
  );
}
