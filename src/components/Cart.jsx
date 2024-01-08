import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const { cart } = useContext(CartContents)
 
  return (
    <>
      <p>This cart is empty</p>
      {cart}
    </>
  );
}
