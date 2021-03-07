import {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Authentication/Login';
import {auth} from './Firebase-Backend/firebase'
import {useAuthValue} from './store/authentication/AuthenticationProvider';
import {setUserAuthentication} from './store/authentication/authenticationActionCreator'
import Payment from './Payment/Payment.';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';
import Register from './Authentication/register';

const promise = loadStripe('pk_test_D19nfyE8JfMSP99ms7Atlxlf0001HGdMyF');

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              < Payment />
            </Elements>
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
