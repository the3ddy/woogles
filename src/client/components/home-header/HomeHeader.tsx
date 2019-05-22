/**
 * *********************
 * 
 * @module HomeHeader
 * @author the3ddy
 * @date 5/21/2019
 * @description shows the display routing of item lists
 * 
 * *********************
 */

// dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const HomeHeader = (props: any) => {
  return (
    <div>
      <NavLink to="/home/pagination" activeClassName="is-active" exact={true}>Pagination</NavLink>
      <NavLink to="/home/infinitescroll" activeClassName="is-active" exact={true}>Infinite Scroll</NavLink>
      <NavLink to="/home/filter" activeClassName="is-active" exact={true}>Filter</NavLink>
    </div>
  )
}

export default HomeHeader;