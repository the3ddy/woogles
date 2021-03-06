/**
 * *********************
 * 
 * @module Index
 * @author the3ddy
 * @date 5/22/2019
 * @description top most component
 * 
 * *********************
 */

// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_app/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('index'));


// TYPESCRIPT EXAMPLE
// import { Hello } from "./client/components/_templates/template.tsx";
{/* <Hello compiler="TypeScript" framework="React" />, */}