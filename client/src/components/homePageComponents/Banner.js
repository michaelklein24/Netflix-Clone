import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

import classes from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center",
      }}
    >
      <div className={classes.banner__contents}>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
        <h2>
            {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className={classes.banner__fadeBottom} />
    </header>
  );
};

export default Banner;
