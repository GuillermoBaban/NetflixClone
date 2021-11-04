import axios from "../services/axios";
import { useState, useEffect } from "react";

const BannerHook = (fetchUrl) => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getFetch() {
      await axios
        .get(fetchUrl)
        .then((response) => {
          setMovies(response);
          setLoad(true);
        })
        .catch(async () => {
          await axios
            .get(
              `https://api.themoviedb.org/3/movie/11?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            )
            .then((r) => {
              setMovies(r);
              setLoad(true);
            });
        });
    }
    getFetch();
  }, [fetchUrl]);
  return { movies, load };
};

export default BannerHook;
