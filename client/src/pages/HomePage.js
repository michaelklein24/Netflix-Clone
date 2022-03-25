import { Fragment } from "react";

import Row from "../components/homePageComponents/Row";
import requests from "../utils/requests";

import Banner from '../components/homePageComponents/Banner'
import NavBar from '../components/homePageComponents/NavBar'

import classes from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.homePage}>
        <NavBar />
        <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
