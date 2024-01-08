import { Link } from "react-router-dom";
import { CartContents } from "./App";
import { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

function Nav() {
  const cart = useContext(CartContents);
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(cart.length);
  }, [cart]);

  return (
    <div className="justify-between flex items-center m-5 mr-10">
      <img src={logo} className="h-6 md:h-10" alt="" />
      <nav className="flex items-center justify-end">
        <ul className="flex text-2xl gap-2">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            <div>
              <div>Cart</div>
              <div
                className={`relative -translate-y-5 translate-x-12 w-fit text-sm p-1 text-center ${
                  size === 0 ? "hidden" : ""
                } bg-slate-600 bg-opacity-30 rounded-full`}
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

export default function Header() {
  return <Nav />;
}
