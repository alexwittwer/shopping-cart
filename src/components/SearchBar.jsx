import { useContext, useState } from "react";
import { search } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { UpdateSearchTerm } from "./App";
import srch_ico from "../assets/srch_ico.svg"

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
      <form action="" className ="flex items-center gap-1" onSubmit={handleSearch}>
        <input
          className="max-w-40 pl-2 md:max-w-80 lg:min-w-96"
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button className="p-0 m-0 bg-opacity-0" ><img src={srch_ico} alt="" width={"20px"} /></button>
      </form>
    </>
  );
}
