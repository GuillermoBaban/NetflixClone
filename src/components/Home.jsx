import { getTrending } from "../services/index";
import { useEffect, useState, useRef } from "react";
import { Row, Card, Container, Button } from "react-bootstrap";

import "./styles.css";

const URL = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [arrowMove, setArrowMove] = useState(0);

  useEffect(() => {
    getTrending().then((res) => setMovies(res));
  }, []);

  const margin_left = useRef();

  const handleRef = () => {
    if (arrowMove === -1) {
      margin_left.current.style.marginLeft = "0%";
      margin_left.current.style.transition = "0.4s";
    }
    if (arrowMove === 0) {
      margin_left.current.style.marginLeft = "-100%";
      margin_left.current.style.transition = "0.4s";
    }
    setArrowMove(arrowMove + 1);
    console.log(arrowMove);
    if (arrowMove === 1) margin_left.current.style.marginLeft = "-200%";
    else if (arrowMove === 2) {
      margin_left.current.style.marginLeft = "-237%";
      setArrowMove(-1);
    }
  };

  return (
    <Container fluid style={{ backgroundColor: "black", height: "100vh" }}>
      <h3 className="text-primary p-3">Trending</h3>
      <Row
        ref={margin_left}
        className="flex-nowrap hiddenBar"
        style={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "scroll",
        }}
      >
        {movies.map((card, index) => (
          <Card style={{ width: "20rem", backgroundColor: "black" }}>
            <Card.Img
              className="imgHover"
              variant="bottom"
              style={{ width: "20rem" }}
              src={URL + card.backdrop_path}
            />
          </Card>
        ))}
      </Row>
      <Button onClick={handleRef}> Hola </Button>
    </Container>
  );
};
