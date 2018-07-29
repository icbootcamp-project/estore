import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Students extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    return (
      <div>
        This is Students Component
        <div>{this.props.students.one}</div>
        {this.props.error && <div>{this.props.error.message}</div>}
      </div>
    );
  }
}

function mapStateToProps({ students }) {
  return {
    students: students.data,
    error: students.error
  };
}
export default connect(mapStateToProps, {
  fetchStudents: actions.fetchStudents
})(Students);
