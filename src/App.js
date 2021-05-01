import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {auth} from './Firebase-Backend/firebase'

import Payment from './Payment/payment';
import Header from './Header/header';
import Home from './Home/home';
import Login from './Authentication/login';
import OrderList from './Orders/order-list';
import Register from './Authentication/register';
import Checkout from './Checkout/checkout';
import './App.css';

import authHelper from './Authentication/auth-helper';

const promise = loadStripe('pk_test_D19nfyE8JfMSP99ms7Atlxlf0001HGdMyF');

function App() {

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        authHelper.removeUserFromRedux()
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <OrderList />
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
