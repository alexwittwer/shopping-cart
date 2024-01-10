import { useContext, useState } from "react";
import { search } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { SearchFunc } from "./App";

export default function SearchBar() {
  const [term, setTerm] = useState();
  const supplySearch = useContext(SearchFunc);
  const navigate = useNavigate();

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await supplySearch(data);
      navigate(`/search/${term}`);
    } catch (error) {
      console.warn(error);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = search(term);
    fetchData(searchTerm);
  }

  return (
    <>
      <form action="" onSubmit={handleSearch}>
        <input
            className="max-w-40 sm:max-w-full"
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </form>
    </>
  );
}
