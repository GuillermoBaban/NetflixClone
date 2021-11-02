import { Row, Card } from "react-bootstrap";
import "./styles.css";

const URL = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2";

export const Rows = ({ movies }) => {
  return (
    <>
      <Row className="flex-nowrap hiddenBar">
        {movies.map((card) => (
          <Card
            style={{
              width: "20rem",
              backgroundColor: "black",
              marginTop: "2rem",
            }}
            key={card.id}
            className="item"
          >
            <Card.Img
              className="imgHover"
              variant="bottom"
              style={{ width: "20rem" }}
              src={URL + card.backdrop_path}
            />
            <Card.Body>
              <Card.Title className="text-primary">
                {card.original_title}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};
