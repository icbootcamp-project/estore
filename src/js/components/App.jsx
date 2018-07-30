import React from "react";
import { connect } from "react-redux";
import { func, shape, arrayOf, string, bool, any } from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import * as actions from "../actions";

export class App extends React.Component {
  static propTypes = {};

  static defaultProps = {
    error: null
  };

  render() {
    return <div className="app">Hello ICBootcamp</div>;
  }
}

// function mapStateToProps({ data }) {
//   return {
//     data: data.data,
//     isLoading: data.isLoading,
//     error: data.error
//   };
// }

export default withRouter(
  connect(
    null,
    { fetchData: actions.fetchData }
  )(App)
);
