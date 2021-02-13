import {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import {auth} from './Firebase-Backend/firebase'
import {useAuthValue} from './store/authentication/AuthenticationProvider';
import {setUserAuthentication} from './store/authentication/authenticationActionCreator'

function App() {
  const [, dispatch] = useAuthValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUserAuthentication(authUser, dispatch)
      } else {
        setUserAuthentication(null, dispatch)
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
