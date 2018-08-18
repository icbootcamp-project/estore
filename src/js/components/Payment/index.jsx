import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import { func } from "prop-types";
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  withRouter
} from "react-router-dom";

// import * as actions from "../actions";
// import Home from "./Home";

export class Payment extends Component {
  // static propTypes = {
  //   loadHeader: func.isRequired,
  //   loadCategories: func.isRequired
  // };

  // static defaultProps = {};

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <div id="payment">
          <div className="paymentTop">
            <h1>Payment</h1>
          </div>
          <div className="paymentForm">
            <input />
          </div>
        </div>
      </Fragment>
    );
  }
}

// function mapStateToProps({ headerReducer, categoriesReducer }) {
//   return {
//     header: headerReducer.data,
//     categories: categoriesReducer.data
//   };
// }

export default withRouter(
  connect(null,{})(Payment)
);
