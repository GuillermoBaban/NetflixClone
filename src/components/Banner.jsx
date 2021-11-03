import axios from "../services/axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export const Banner = ({ fetchUrl }) => {
  const img_url = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  // Siempre tengo el mismo fetch

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

  return (
    <>
      {load ? (
        <header
          className="bannerC"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${img_url + movies.data.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <h1>Hola</h1>
          <h1>aoea</h1>
        </header>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};
