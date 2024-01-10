/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartAdd, CartContents, CartDel } from "./App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GamesPage() {
  const [game, setGame] = useState([]);
  const [screens, setScreens] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext(CartAdd);
  const cart = useContext(CartContents);
  const delGame = useContext(CartDel);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}?key=122f438994ad4f20891d56632a5002b3`
      );
      const data = await response.json();

      return data;
    }

    async function fetchScreens() {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=122f438994ad4f20891d56632a5002b3`
      );
      const data = await response.json();

      return data;
    }

    if (id) {
      fetchData()
        .then((results) => setGame(results))
        .catch((error) => console.warn(error));
      fetchScreens()
        .then((results) => setScreens(results))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div className="circle-spin-2 self-center place-self-center"></div>;
  }

  return (
    <Card game={game}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2 mb-1"
      >
        {screens.results &&
          screens.results.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <img src={img.image} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Description
        game={game}
        addToCart={addToCart}
        delGame={delGame}
        cart={cart}
      />
    </Card>
  );
}

function Card({ children, game }) {
  return (
    <div className="mx-2 p-5 bg-slate-700 rounded-xl my-5 shadow-xl lg:w-2/3 lg:mx-auto">
      <h1 className="text-center text-3xl my-5">{game.name}</h1>
      {children}
    </div>
  );
}

function Description({ game, addToCart, delGame, cart }) {
  return (
    <>
      <div className="flex items-center gap-3 justify-between">
        <div className="font-bold">Average rating: {game.rating}/5</div>
        <div className="flex items-center gap-3">
          <div>
            Price: ${(Math.round(game.rating * 1000) / 100 + 0.09).toFixed(2)}
          </div>
          {cart.some((item) => item.id === game.id) ? (
            <button onClick={() => delGame(game.id)}>Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(game)}>Add to cart</button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Description: </p>
        <div
          className="flex flex-col gap-3"
          dangerouslySetInnerHTML={{ __html: game.description }}
        />
      </div>
    </>
  );
}
