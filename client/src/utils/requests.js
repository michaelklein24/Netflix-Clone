const APIKEY = "e434f86986f13f690168c613031343da";

const requests = {
  fetchTrending: `/trending/movie/week?api_key=${APIKEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&with_genres=99`,
};

export default requests