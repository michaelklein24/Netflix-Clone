const APIKEY = "e434f86986f13f690168c613031343da";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=action`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=comedy`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=horror`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=romance`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=documentaries`,
};

export default requests