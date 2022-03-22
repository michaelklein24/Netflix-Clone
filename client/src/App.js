import { Switch, Route, Redirect } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to='landing' />
      </Route>
      <Route path="/landing" exact>
        <LandingPage />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
