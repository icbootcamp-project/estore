// ########## Import Dependencies Here ##########
import React, { Component } from "react";
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
    loadHeader: func.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadHeader } = this.props;
    loadHeader();
  }

  render() {
    return (
      <div className="app">
        <Home {...this.props} />
      </div>
    );
  }
}

function mapStateToProps({ headerReducer }) {
  return {
    header: headerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { loadHeader: actions.loadHeader }
  )(App)
);
