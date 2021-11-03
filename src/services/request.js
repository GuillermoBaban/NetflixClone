const API_KEY = process.env.REACT_APP_API_KEY;
const numR = Math.round(Math.random() * (800 - 0) + 0);

const request = {
  fetchPopular: `/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchBanner: `https://api.themoviedb.org/3/movie/${numR}?api_key=${API_KEY}&language=en-US`,
};

export default request;
