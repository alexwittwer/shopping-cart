import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import { popular, recent, upcoming } from "../utils/api";
import Loading from "./Loading";

export default function Landing() {
  const [popularGames, setPopularGames] = useState([]);
  const [recentGames, setRecentGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    Promise.all([fetchData(recent), fetchData(popular), fetchData(upcoming)])
      .then(([recentResults, popularResults, upcomingResults]) => {
        setRecentGames(recentResults);
        setPopularGames(popularResults);
        setUpcomingGames(upcomingResults);
        setLoading(false); // Set loading to false after both calls are done
      })
      .catch((error) => console.warn(error));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <LandingWrapper>
      <Hero />
      <Marquee
        speed={50}
        gradient={true}
        pauseOnHover={true}
        autoFill={true}
        gradientWidth={50}
        gradientColor={"#242424"}
        className="flex slate gap-10"
      >
        {popularGames.results.map((game) => {
          return <Image key={game.id} game={game} />;
        })}
      </Marquee>
      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={true}
        gradientWidth={50}
        autoFill={true}
        gradientColor={"#242424"}
        className="flex slate gap-10"
        direction="right"
      >
        {recentGames.results.map((game) => {
          return <Image key={game.id} game={game} />;
        })}
      </Marquee>
      <Marquee
        speed={50}
        gradient={true}
        autoFill={true}
        pauseOnHover={true}
        gradientWidth={50}
        gradientColor={"#242424"}
        className="flex slate gap-10"
      >
        {upcomingGames.results.map((game) => {
          return <Image key={game.id} game={game} />;
        })}
      </Marquee>
    </LandingWrapper>
  );
}

function Hero() {
  return (
    <>
      <Link to="/shop">
        <button className="text-3xl">Shop Good Games</button>
      </Link>
      <p>Thousands of games to choose from!</p>
    </>
  );
}

function Image({ game }) {
  return (
    <Link to={`/games/${game.id}`}>
      <img src={game.background_image} className="h-20 md:40 px-2" alt="" />
    </Link>
  );
}

function LandingWrapper({ children }) {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      {children}
    </section>
  );
}
