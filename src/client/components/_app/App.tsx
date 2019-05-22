/**
 * *********************
 * 
 * @module App
 * @author the3ddy
 * @date 5/22/2019
 * @description central app location - 2nd highest level component
 * 
 * *********************
 */

// dependencies
import * as React from 'react';
// components
import Main from '../main/Main';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div>
      <h1>App Level</h1>
      <Main />
      <Footer />
    </div>
  )
}

export default App;
