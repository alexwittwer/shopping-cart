import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const cart = useContext(CartContents);

  return (
    <>
      {cart.map((e) => 
        <p>{e.name}</p>
      )}
    </>
  );
}
