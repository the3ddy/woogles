/**
 * *********************
 * 
 * @module MainHeader
 * @author the3ddy
 * @date 5/21/2019
 * @description includes Navigation for the main pages
 * 
 * *********************
 */

// dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = (props: any) => {
  return (
    <div>
      <NavLink to="/home" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/aboutus" activeClassName="is-active" exact={true}>About Us</NavLink>
      <NavLink to="/contactus" activeClassName="is-active" exact={true}>Contact Us</NavLink>
    </div>
  )
}

export default MainHeader;