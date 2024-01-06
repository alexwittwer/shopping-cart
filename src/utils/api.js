import { useState, useEffect } from "react";


const API_KEY = "122f438994ad4f20891d56632a5002b3";
const ACCESS = "https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added"
const url = `${ACCESS}&key=${API_KEY}`;
const gameurl = ``

const fetchGame = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};



export { url };
