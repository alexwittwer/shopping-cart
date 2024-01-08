import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function Nav(cart) {
  return (
    <div className="justify-between flex items-center m-3">
      <img src={logo} className="h-6 md:h-10" alt="" />
      <nav className="flex items-center justify-end">
        <ul className="flex text-2xl gap-2">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            <div>Cart</div>
            <div>{cart.size}</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  return <Nav />;
}
