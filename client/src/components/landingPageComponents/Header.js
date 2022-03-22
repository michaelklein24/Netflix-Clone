
import netflixLogo from '../../images/netflix-logo.png'
import Button from '../../UI/Button'

import classes from './Header.module.css'

const Header = () => {
    return <main className={classes.main}>
        <header className={classes.header}>
            <img src={netflixLogo} />
            <Button>Sign In</Button>
        </header>
        <form>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input type="text" placeholder="Email address"/>
            <Button type="submit">Get Started</Button>
        </form>
    </main>
}

export default Header