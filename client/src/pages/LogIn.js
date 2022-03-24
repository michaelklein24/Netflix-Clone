import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import classes from './LogIn.module.css'

import Button from '../UI/Button'
import netflixLogo from '../images/netflix-logo.png'

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/Auth";

const LogIn = () => {
    const [formState, setFormState] = useState({ email: "", password: "" })
    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (!formState.email || !formState.password) {
                alert("You must enter an email AND a password");
                throw new Error("Invalid email or password")
            } else {
                console.log(formState.email, formState.password)
                const mutationResponse = await loginUser({
                    variables: {
                        email: formState.email,
                        password: formState.password
                    }
                })
                console.log(mutationResponse)
                if (mutationResponse) {
                    const token = mutationResponse.data.login.token;
                    Auth.login(token);
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <main className={classes.main}>
        <img src={netflixLogo} />
        <form onSubmit={submitHandler}>
            <h1>Log In</h1>
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
            <Button type="submit">Sign In</Button>
            <div>
                <p>New to Netflix?</p>
                <NavLink to="/SignUp">Sign up now.</NavLink>
            </div>
        </form>
    </main>
}

export default LogIn