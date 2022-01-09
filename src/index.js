import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/stylesheet.css'
import { Provider } from 'react-redux';
import App from './Components/App';
import { createStore } from 'redux';
import postReducer from './redux/reducer';
//import store from './redux/store';

const store = createStore(postReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
