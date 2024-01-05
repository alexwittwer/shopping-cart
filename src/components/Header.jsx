import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-end mr-5 mt-5">
      <ul className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </ul>
    </nav>
  );
}

export default function Header() {
  return <Nav />;
}
