import { getTrending } from "../services/index";
import { useEffect, useState } from "react";
import { Row, Card, Container } from "react-bootstrap";
import { useHorizontalScroll } from "../Hooks/useSideScroll";

import "./HomeS.css";

const URL = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2";

export const Home = () => {
  const scrollRef = useHorizontalScroll();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "black", height: "100vh" }}>
      <h3 className="text-primary p-3">Trending</h3>
      <Row
        className="flex-nowrap hiddenBar"
        style={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "scroll",
        }}
        ref={scrollRef}
      >
        {movies.map((card, index) => (
          <Card style={{ width: "20rem", backgroundColor: "black" }}>
            <Card.Img
              variant="bottom"
              style={{ width: "20rem" }}
              src={URL + card.backdrop_path}
            />
          </Card>
        ))}
      </Row>
    </Container>
  );
};
