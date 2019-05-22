/**
 * *********************
 * 
 * @module Main
 * @author the3ddy
 * @date 5/21/2019
 * @description includes the Main body section with a header and routing to Home, About Us, and Contact Us
 * 
 * *********************
 */

// dependencies
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import MainHeader from '../main-header/MainHeader';
import Home from '../home/Home';
import AboutUs from '../about-us/AboutUs';
import ContactUs from '../contact-us/ContactUs';

const Main = (props: any) => {
  return (
    <BrowserRouter>
      <hr />

      <h3>Navigation Bar</h3>
      <p>Logo & Title</p>
      <MainHeader />
      <p>Authentication</p>
      <hr />

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/aboutus" component={AboutUs} exact={true} />
        <Route path="/contactus" component={ContactUs} exact={true} />
      </Switch>

      <hr />
    </BrowserRouter>
  )
}

export default Main;