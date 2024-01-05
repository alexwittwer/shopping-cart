import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";

function App() {
  const [cart, setCart] = useState([]);
  const { name } = useParams();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
