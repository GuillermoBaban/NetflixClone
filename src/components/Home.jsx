import { getTrending, getPopular, getTopRated } from "../services/index";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Rows } from "./Rows";
import "./styles.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isBusy, setBusy] = useState(false);
  const gender = ["Trending", "Popular", "Top Rated"];

  useEffect(() => {
    setBusy(true);

    async function fetchData() {
      getTrending().then((res) => setMovies((movies) => [...movies, res]));
      getPopular().then((res) => setMovies((movies) => [...movies, res]));
      getTopRated().then((res) => setMovies((movies) => [...movies, res]));
    }
    fetchData();
  }, []);

  console.log(movies);

  return (
    <Container fluid style={{ backgroundColor: "black", height: "100vh" }}>
      {isBusy && movies.length === 3 ? (
        movies.map((m, i) => (
          <div key={i}>
            <h1 className="d-inline">{gender[i]}</h1>
            <Rows movies={m} />
          </div>
        ))
      ) : (
        <Spinner animation="border" variant="dark" />
      )}
    </Container>
  );
};
