import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const { contents } = useContext(CartContents)
 
  return (
    <>
      <p>This cart is empty</p>
      {contents}
    </>
  );
}
