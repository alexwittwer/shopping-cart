import { Link } from "react-router-dom";
import { CartContents } from "./App";
import { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.jpg";

export default function Header() {
  const cart = useContext(CartContents);
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(cart.length);
  }, [cart]);

  return (
    <div className="justify-between flex items-center mr-10 sm:mr-10 sm:m-5">
      <div>
        <img src={logo} className="hidden md:block md:h-10" alt="" />
      </div>
      <nav className="flex items-center justify-end">
        <ul className="flex text-2xl p-3 gap-2">
          <SearchBar setLoading={null}/>
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            <div>
              <div>Cart</div>
              <div
                className={`relative -translate-y-5 translate-x-12 w-fit text-sm p-1 text-center bg-slate-600 bg-opacity-30 rounded-full`}
              >
                {size}
              </div>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
