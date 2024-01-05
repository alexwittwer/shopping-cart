import { useParams } from "react-router-dom";

export default function GamesPage( {game} ) {
    const {id} = useParams();

  return (
    <>
      <article>
        <div>
          <h1>Name</h1>
          <img src={game.background_image} alt="" />
          <p>Rate</p>
          {game.platform.map((platform) => {
            return <div key={platform.id}> {platform.name}</div>;
          })}
        </div>
      </article>
    </>
  );
}
