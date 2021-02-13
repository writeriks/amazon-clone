import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BasketProvider} from './store/basket/BasketProvider';
import {AuthProvider} from './store/authentication/AuthenticationProvider';
import basketReducer, {initialBasketState} from './store/basket/basketReducer';
import authReducer, {initialAuthState} from './store/authentication/authenticationReducer';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider reducer={authReducer} initialState={initialAuthState}>
      <BasketProvider reducer={basketReducer} initialState={initialBasketState} >
        <App />
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
