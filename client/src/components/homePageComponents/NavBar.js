import React, { useState, useEffect } from "react";

import classes from "./NavBar.module.css";

import netflixLogo from "../../images/netflix-logo.png";
import Button from "../../UI/Button";

const Navbar = () => {
    const [show, setShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setShow(true) : setShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

  return (
    <div className={`${classes.nav} ${show && classes.nav__black}`}>
      <img className={classes.nav__logo} src={netflixLogo} alt="netflix logo" />
      <Button>Sign Out</Button>
    </div>
  );
};

export default Navbar;
