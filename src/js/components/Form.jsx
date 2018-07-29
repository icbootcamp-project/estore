import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Form extends Component {
  state = {
    name: '',
    age: 0
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleAgeChange = e => {
    this.setState({
      age: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.saveForm(this.state);
  };

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <form onSubmit={this.submitHandler}>
          <div style={{ margin: '10px' }}>
            Name:
            <input
              name="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            Age:
            <input value={this.state.age} onChange={this.handleAgeChange} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { saveForm: actions.saveForm })(Form);
