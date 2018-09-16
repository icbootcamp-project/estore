// ########## Import Dependencies Here ##########
import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";

// ########## Import Components Here ##########
import * as actions from "../actions";
import Home from "./Home";
import Confirmation from "./Confirmation/Confirmation";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";


export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadCategories: func.isRequired,
    loadProducts: func.isRequired,
    loadFooter: func.isRequired
  };

  static defaultProps = {};
  // <Confirmation {...this.props} />
  componentDidMount() {
    const {
      loadHeader,
      loadCategories,
      loadProducts,
      loadFooter
    } = this.props;
    loadHeader();
    loadCategories();
    loadProducts();
    loadFooter();
  }

  render() {
    
    return (
      <Router>
        <div className="app">
          
          <Switch>
            <Route exact path="/" render={() => <Home {...this.props} />} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Redirect to="/" />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

function mapStateToProps({
  headerReducer,
  categoriesReducer,
  productsReducer,
  footerReducer
}) {
  return {
    header: headerReducer.data,
    categories: categoriesReducer.data,
    products: productsReducer.data,
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCategories: actions.loadCategories,
      loadProducts: actions.loadProducts,
      loadFooter: actions.loadFooter,
    }
  )(App)
);
