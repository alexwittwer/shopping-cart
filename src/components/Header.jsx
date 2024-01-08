import { Link } from "react-router-dom";
import { CartContents } from "./App";
import { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.jpg"

function Nav(cart) {
  const cart = useContext(CartContents);
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(cart.length)
  }, [size] )


  return (
    <div className="justify-between flex items-center m-3">
      <img src={logo} className="h-6 md:h-10" alt="" />
      <nav className="flex items-center justify-end">
        <ul className="flex text-2xl gap-2">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            <div>Cart</div>
            <div>{size}</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  return <Nav />;
}
