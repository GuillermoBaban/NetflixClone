import "bootstrap/dist/css/bootstrap.min.css";
import { Rows } from "./components/Rows";
import request from "./services/request";
import { Banner } from "./components/Banner";

function App() {
  return (
    <>
      <Banner fetchUrl={request.fetchBanner} />
      <Rows title="Popular" fetchUrl={request.fetchPopular} />
      <Rows title="Top rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Up coming" fetchUrl={request.fetchUpcoming} />
    </>
  );
}

export default App;
