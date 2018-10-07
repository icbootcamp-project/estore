// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  withRouter
} from "react-router-dom";

// ########## Import Components Here ##########
import * as actions from "../actions";
import Home from "./Home";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadFooter: func.isRequired,
    loadCart: func.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadHeader, loadFooter, loadCart } = this.props;
    loadHeader();
    loadCart();
    loadFooter();
  }

  render() {
    return (
      <Fragment>
        <div className="app">
          <Home {...this.props} />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ headerReducer, cartReducer, footerReducer }) {
  return {
    header: headerReducer.data,
    cart: cartReducer.data,
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCart: actions.loadCart,
      loadFooter: actions.loadFooter
    }
  )(App)
);
