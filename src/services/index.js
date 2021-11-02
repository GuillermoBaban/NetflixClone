import axios from "axios";

const API_KEY = "6edbe7a47920c457071b6c619755d4ee";
export async function getTrending() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
    `
    )
    .then((response) => {
      const {
        data: { results },
      } = response;
      return results;
    });
}

export async function getPopular() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
    `
    )
    .then((response) => {
      const {
        data: { results },
      } = response;
      return results;
    });
}

export async function getTopRated() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
    `
    )
    .then((response) => {
      const {
        data: { results },
      } = response;
      return results;
    });
}
