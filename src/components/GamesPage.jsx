import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function GamesPage() {
  const [game, setGame] = useState([]);
  const [screens, setScreens] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <article className="flex items-center justify-center">
        <Card>
          <h1 className="text-center text-3xl my-5">{game.name}</h1>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
              <div>Price: $49.99</div>
              <button>Add to cart</button>
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
    <article className="w-3/4 p-5 bg-slate-700 rounded-xl my-5 shadow-xl">
      {children}
    </article>
  );
}
