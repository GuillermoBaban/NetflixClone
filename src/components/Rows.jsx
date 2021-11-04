import { Row, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "../services/axios";
import "./styles.css";

const img_url = "https://image.tmdb.org/t/p/original";

export const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <h1 className="d-inline">{title}</h1>
      <Row className="flex-nowrap hiddenBar">
        {movies.map((movie) => (
          <Card key={movie.id} className="cardMove">
            <Card.Img
              className="imgHover"
              variant="bottom"
              style={{ width: "10rem" }}
              src={img_url + movie.poster_path}
            />
          </Card>
        ))}
      </Row>
    </>
  );
};
