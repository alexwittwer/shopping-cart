import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const cart = useContext(CartContents);
  const test = JSON.stringify(cart);
 
  return (
    <>
      <p>This cart is empty</p>
      <p>{test}</p>
    </>
  );
}
