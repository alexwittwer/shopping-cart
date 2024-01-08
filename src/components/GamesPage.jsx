import { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartAdd } from "./App";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function GamesPage() {
  const [game, setGame] = useState([]);
  const [screens, setScreens] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useContext (CartAdd);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
  }, []);

  if (loading) {
    return <div className="circle-spin-2 self-center place-self-center"></div>;
  }

  return (
    <>
      <article className="flex items-center justify-center mx-2">
        <Card>
          <h1 className="text-center text-3xl my-5">{game.name}</h1>
          <Swiper 
            navigation={true} 
            loop={true} 
            spaceBetween={10} 
            thumbs={{ swiper: thumbsSwiper}}  
            modules={[Navigation, FreeMode, Thumbs]} 
            className="mySwiper2 mb-1">
            {screens.results.map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper 
            onSwiper={setThumbsSwiper}
            loop={true} 
            spaceBetween={1} 
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, FreeMode, Thumbs]} 
            className="mySwiper mb-3">
            {screens.results.map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex items-center justify-end m-3 gap-3">
            <div className="flex items-center gap-3">
              <div>Price: ${game.rating * 10}</div>
              <button onClick = {() => addToCart(game)}>Add to cart</button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Average rating: {game.rating}/5</div>
            <p>Description: </p>
            <div
              className="flex flex-col gap-3"
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
          </div>
        </Card>
      </article>
    </>
  );
}

function Card({ children }) {
  return (
    <article className="w-full mx-2 p-5 bg-slate-700 rounded-xl my-5 shadow-xl">
      {children}
    </article>
  );
}
