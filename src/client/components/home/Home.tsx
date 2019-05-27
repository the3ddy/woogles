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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/ecommerce.js';
// components
import HomeHeader from '../home-header/HomeHeader';
import Pagination from '../pagination/Pagination';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import Filter from '../filter/Filter';

const mapStateToProps = (store: any) => {

};

const mapDispatchToProps = (dispatch: any) => {

}

class Home extends React.Component<{}, { items: [] }> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // grabs the item list from api and set as state
    fetch('/items')
      .then(data => data.json())
      .then(items => {
        this.setState(prevState => {
          return ({ items: items })
        })
      })
  }

  render() {
    console.log(this.state.items);
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
}

export default Home;