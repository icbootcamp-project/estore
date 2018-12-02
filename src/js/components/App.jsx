// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

// ########## Import Components Here ##########
import * as actions from '../actions';
import Home from '../containers/Home';
import Confirmation from '../containers/Confirmation';
import Delivery from '../containers/Delivery';
import Payment from './Payment/Payment';
import Products from '../containers/Products';
import Cart from '../containers/Cart';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadFooter: func.isRequired,
    header: shape().isRequired,
    footer: shape().isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadHeader, loadFooter } = this.props;
    loadHeader();
    loadFooter();
  }

  render() {
    const { header, footer } = this.props;
    return (
      <Router>
        <div className="app">
          <Header header={header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/products" render={() => <Products />} />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
          <Footer footer={footer} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ headerReducer, footerReducer }) {
  return {
    header: headerReducer.data,
    footer: footerReducer.data,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadFooter: actions.loadFooter,
    }
  )(App)
);
