import { Switch, Route, Redirect } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to='/landing' />
      </Route>
      <Route path="/landing" exact>
        <LandingPage />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/login" exact>
        <LogIn />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App;
