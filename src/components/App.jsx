import { useEffect, useState } from "react";
import { url } from "../utils/api";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing"

function App() {
  const [games, setGames] = useState([]);
  const { name } = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      return data.results;
    }

    console.warn("repeated fetch request");

    fetchData().then((results) => setGames(results));
  }, []);

  return (
    <>
      <Header />
      {name === "home" ? <Landing /> : ""}
      <Outlet />
    </>
  );
}

export default App;
