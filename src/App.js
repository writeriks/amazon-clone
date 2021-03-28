import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import authReducerActionCreator from './redux-reducer/auth-reducer/auth-action-creator';
import {useDispatch} from 'react-redux'

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
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        authHelper.getUserProfileAndSaveToRedux(authUser)
        dispatch(authReducerActionCreator.setUserAuthentication(authUser))
      } else {
        dispatch(authReducerActionCreator.setUserAuthentication(null))
      }
    })
  }, [dispatch])

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
