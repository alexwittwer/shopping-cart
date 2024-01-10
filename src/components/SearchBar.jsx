import { useContext, useState } from "react";
import { search } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { SearchFunc } from "./App";
import srch_ico from "../assets/srch_ico.svg"

export default function SearchBar({ setLoading }) {
  const [term, setTerm] = useState();
  const supplySearch = useContext(SearchFunc);
  const navigate = useNavigate();

  async function fetchData(url) {
    try {
      if (setLoading) {setLoading(true)}
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
      <form action="" className ="flex items-center gap-1" onSubmit={handleSearch}>
        <input
          className="max-w-40 sm:max-w-full"
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button className="p-0 m-0" ><img src={srch_ico} alt="" width={"20px"} /></button>
      </form>
    </>
  );
}
