import { Row, Card, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "../services/axios";
import "./styles.css";

const img_url = "https://image.tmdb.org/t/p/original";

export const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsload] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      setIsload(true);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="rows-content">
      <h1 className="d-inline text-white">{title}</h1>
      <Row className="flex-nowrap hiddenBar">
        {isLoad ? (
          movies.map((movie) => (
            <Card key={movie.id} className="cardMove">
              <Card.Img
                className="imgHover"
                variant="bottom"
                style={{ width: "10rem" }}
                src={img_url + movie.poster_path}
              />
            </Card>
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </Row>
    </div>
  );
};
