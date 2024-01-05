import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { url } from "../utils/api";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
