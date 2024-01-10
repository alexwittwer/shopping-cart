const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const today = `${year}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;

const API_KEY = "122f438994ad4f20891d56632a5002b3";
const ACCESS = `https://api.rawg.io/api/games?dates=${lastYear},2023-12-31&ordering=-added`;
const ACCESS2 =
  "https://api.rawg.io/api/games?dates=2023-11-01,2024-01-30&platforms=18,1,7";
const ACCESS3 = `https://api.rawg.io/api/games?dates=${today},2024-12-30&ordering=-added`;
const BASE = "https://api.rawg.io/api/games?";
const popular = `${ACCESS}&key=${API_KEY}`;
const recent = `${ACCESS2}&key=${API_KEY}`;
const upcoming = `${ACCESS3}&key=${API_KEY}`;

function search(str) {
  return `${BASE}search=${str}&ordering=rating&key=${API_KEY}`;
}

export { search, popular, recent, upcoming };
