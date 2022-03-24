import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

//   console.log(movies);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={`${classes.row__posters}`}>
        {movies.map((movie) => (
          <img
            className={`${classes.row__poster} ${
              isLargeRow && classes.row__posterLarge
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            key={movie.id}
          />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
};

export default Row;
