import { useContext, useState } from "react";
import { search } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { UpdateSearchTerm } from "./App";

export default function SearchBar() {
  const [term, setTerm] = useState();
  const setSearchTerm = useContext(UpdateSearchTerm);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = search(term);
    setSearchTerm(searchTerm);
    navigate(`/search/${term}`)
  }

  return (
    <>
      <form action="" onSubmit={handleSearch}>
        <input
          className="max-w-40 pl-2 sm:max-w-full"
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
