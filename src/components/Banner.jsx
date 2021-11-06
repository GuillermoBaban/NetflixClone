import BannerHook from "../costomHooks/bannerHook";
import { Spinner, Button } from "react-bootstrap";
import { NavbarNetflix } from "./NavbarNetflix";
export const Banner = ({ fetchUrl }) => {
  const img_url = "https://image.tmdb.org/t/p/original";

  const { movies, load } = BannerHook(fetchUrl);

  console.log(movies, load);
  return (
    <>
      <NavbarNetflix />
      {load ? (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${img_url + movies.data.backdrop_path})`,
            backgroundPosition: "center center",
            marginBottom: "1rem",
          }}
        >
          <div className="bannerContent">
            <h1 className="bannerTitle">{movies.data.original_title}</h1>
            <div className="buttons">
              <Button className="me-5 btn btn-light playHover">Play</Button>
              <Button className="btn btn-secondary">More Information</Button>
            </div>
            <h6 className="bannerDescription">{movies.data.overview}</h6>
          </div>
        </header>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};
