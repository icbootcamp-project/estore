// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

// ########## Import Components Here ##########

import Home from '../containers/Home';
import Confirmation from '../containers/Confirmation';
import Delivery from '../containers/Delivery';
import Payment from '../containers/Payment';
import Products from '../containers/Products';
import Cart from '../containers/Cart';
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import Details from '../containers/Details';

export class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/products" render={() => <Products />} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/details" component={Details} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
