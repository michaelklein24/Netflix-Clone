import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./SignUp.module.css";

import netflixLogo from "../images/netflix-logo.png";
import Button from "../UI/Button";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/Auth";

const SignUp = () => {
  const [formState, setFormState] = useState(() => {
    let emailInput = window.localStorage.getItem("email");
    return {
      email: emailInput || "",
      password: "",
      firstName: "",
      lastName: "",
      passwordVerify: "",
    };
  });
  const [addUser, { data }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName, passwordVerify } = formState;

    if (passwordVerify !== password) {
      alert("Your passwords do not match");
      return;
    }
    // try {
    if (email && password && firstName && lastName) {
      let inputs = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };
      console.log(inputs)
      const { data } = await addUser({
        variables: inputs
      });

      const token = data.addUser.token;
      Auth.login(token);
    } else {
      alert("Please enter valid text in all inputs");
      throw new Error("You must provide valid inputs for ALL fields");
    }
    // } catch (err) {
    //     console.log(err)
    // }
  };

  return (
    <main className={classes.main}>
      <div className={classes.netflixLogo}>
        {/* <img src={netflixLogo} /> */}
      </div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div className={classes.nameInputs}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={formState.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Re-enter password"
          name="passwordVerify"
          value={formState.passwordVerify}
          onChange={handleChange}
        ></input>
        <Button type="submit">Sign up</Button>
        <div>
          <p>Already have an account?</p>
          <NavLink to="/login">Log in now.</NavLink>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
