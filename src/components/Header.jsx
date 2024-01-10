import { Link } from "react-router-dom";
import { CartContents } from "./App";
import { useContext } from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.jpg";

export default function Header() {
  const cart = useContext(CartContents);

  return (
    <div className="justify-between flex items-center mr-3 md:mr-10 sm:p-3">
      <Link to="/">
        <img src={logo} className="hidden absolute top-5 left-5 md:block md:h-10" alt="" />
      </Link>
      <nav className="flex items-center">
        <ul className="flex justify-between items-center text-2xl p-3 gap-2">
          <SearchBar setLoading={null}/>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart <div className={`relative -translate-y-5 translate-x-10 w-fit text-sm p-1 text-center bg-slate-600 bg-opacity-30 rounded-full`}>
       {cart.length > 0 ? cart.length : ""}             
          </div>
         </Link>
        </ul>
      </nav>
    </div>
  );
}
