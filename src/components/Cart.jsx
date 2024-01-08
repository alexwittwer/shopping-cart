import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const cart = useContext(CartContents);
  const test = cart.forEach((ent) => JSON.stringify(ent));
 
  return (
    <>
      <p>This cart is empty</p>
      <p>{test}</p>
    </>
  );
}
