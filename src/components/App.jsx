import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);
  const { name } = useParams();

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
