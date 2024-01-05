export default function Item({ game }) {
  return (
    <div
      className="cards text-center flex flex-col items-center my-3"
      key={game.id}
    >
      <img src={game.background_image} alt="" className="max-w max-w-52" />
      <p>{game.name}</p>
    </div>
  );
}
