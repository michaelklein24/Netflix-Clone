import { NavLink } from 'react-router-dom'

import classes from './LogIn.module.css'

import Button from '../UI/Button'
import netflixLogo from '../images/netflix-logo.png'

const LogIn = () => {
    return <main className={classes.main}>
        <img src={netflixLogo} />
        <form>
            <h1>Log In</h1>
            <input type="email" placeholder="Email address"></input>
            <input type="password" placeholder="Password"></input>
            <Button type="submit">Sign In</Button>
            <div>
                <p>New to Netflix?</p>
                <NavLink to="/SignUp">Sign up now.</NavLink>
            </div>
        </form>
    </main>
}

export default LogIn