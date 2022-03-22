import { NavLink } from 'react-router-dom'

import classes from './SignUp.module.css'

import netflixLogo from '../images/netflix-logo.png'
import Button from '../UI/Button'

const SignUp = () => {
    return <main className={classes.main}>
        <img src={netflixLogo} />
        <form>
            <h1>Sign Up</h1>
            <div className={classes.nameInputs}>
                <input type="text" placeholder='First Name'></input>
                <input type="text" placeholder='Last Name'></input>
            </div>
            <input type="email" placeholder="Email address"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Re-enter password"></input>
            <Button type="submit">Sign up</Button>
            <div>
                <p>Already have an account?</p>
                <NavLink to="/login">Log in now.</NavLink>
            </div>
        </form>
    </main>
};

export default SignUp;