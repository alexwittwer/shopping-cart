import { useState } from "react";
import { search } from "../utils/api";

export default function SearchBar() {
  const [term, setTerm] = useState();
  const [games, setGames] = useState([]);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  function handleSearch() {
    const searchTerm = search(term);
    fetchData(searchTerm)
      .then((results) => {
        setGames(results);
      })
      .catch((error) => console.warn(error));
  }

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(e);
        }}
      >
        <input
          type="search"
          name="search"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      {console.log(games)}
    </>
  );
}
