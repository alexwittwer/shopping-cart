import { CartContents } from "./App"
import { useContext } from "react"

export default function Cart() {
  const cart = useContext(CartContents);
 
  return (
    <>
      <p>{cart.map((e) => 
         return (<p>{JSON.stringjfy(e)}</p>)
    </>
  );
}
