/**
 * *********************
 * 
 * @module Home
 * @author the3ddy
 * @date 5/21/2019
 * @description main landing page 
 * 
 * *********************
 */

// dependencies
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import HomeHeader from '../home-header/HomeHeader';
import Pagination from '../pagination/Pagination';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import Filter from '../filter/Filter';

const Home = (props: any) => {
  return (
    <BrowserRouter>
      <h3>Selections</h3>
      <HomeHeader />
      <Switch>
        <Route path="/home/pagination" component={Pagination} exact={true} />
        <Route path="/home/infinitescroll" component={InfiniteScroll} exact={true} />
        <Route path="/home/filter" component={Filter} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}

export default Home;