import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GamesPage() {
  const [game, setGame] = useState([]);
  const [screens, setScreens] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}?key=122f438994ad4f20891d56632a5002b3`
      );
      const data = await response.json();

      return data;
    }

    async function fetchScreens() {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=122f438994ad4f20891d56632a5002b3`
      );
      const data = await response.json();

      return data;
    }

    if (id) {
      fetchData()
        .then((results) => setGame(results))
        .catch((error) => console.warn(error));
      fetchScreens()
        .then((results) => setScreens(results))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return (<p>Loading...</p>)

  return (
    <>
      <article>
        
        {screens.results.map((img) => {
          return (
            <div key={img.id}>
              <img src={img.image} alt="" />
            </div>
          );
        })}
        <h1>{game.name}</h1>
        <p>{game.rating}</p>
        <div>Price: $59.97</div>
      </article>
    </>
  );
}
