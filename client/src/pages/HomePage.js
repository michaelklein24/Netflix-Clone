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
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} id="1" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} id="2" />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} id="3" />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} id="4" />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} id="5" />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        id="6"
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        id="7"
      />
    </div>
  );
};

export default HomePage;
