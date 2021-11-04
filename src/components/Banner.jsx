import BannerHook from "../costomHooks/bannerHook";
import { Spinner, Button } from "react-bootstrap";
export const Banner = ({ fetchUrl }) => {
  const img_url = "https://image.tmdb.org/t/p/original";

  const { movies, load } = BannerHook(fetchUrl);

  console.log(movies, load);
  return (
    <>
      {load ? (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${img_url + movies.data.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="bannerContent">
            <h1 className="bannerTitle">{movies.data.original_title}</h1>
            <div className="buttons">
              <Button>Play</Button>
              <Button>My list</Button>
            </div>
            <h6 className="bannerDescription">{movies.data.overview}</h6>
          </div>
        </header>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};
