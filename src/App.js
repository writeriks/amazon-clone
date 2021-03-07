import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import authReducerActionCreator from './redux-reducer/auth-reducer/auth-action-creator';
import {useDispatch} from 'react-redux'

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {auth} from './Firebase-Backend/firebase'

import Payment from './Payment/Payment.';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Authentication/Login';
import Orders from './Orders/Orders';
import Register from './Authentication/register';
import Checkout from './Checkout/Checkout';
import './App.css';

const promise = loadStripe('pk_test_D19nfyE8JfMSP99ms7Atlxlf0001HGdMyF');

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(authReducerActionCreator.setUserAuthentication(authUser))
        //setUserAuthentication(authUser, dispatch)
      } else {
        dispatch(authReducerActionCreator.setUserAuthentication(null))
        //setUserAuthentication(null, dispatch)
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
