import {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import {auth} from './Firebase-Backend/firebase'
import {useStateValue} from './Provider/StateProvider'
import {reducerTypes} from './Provider/reducerTypes';

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          {
            type: reducerTypes.SET_USER,
            user: authUser
          }
        )
      } else {
        dispatch(
          {
            type: reducerTypes.SET_USER,
            user: null
          }
        )
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
