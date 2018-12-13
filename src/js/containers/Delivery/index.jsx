import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, shape, string } from 'prop-types';

import HeroTitle from '../../commons/HeroTitle';
import TextField from '../../commons/TextField';
import Button from "../../commons/Button";
import * as actions from "./actions";

class Delivery extends React.Component {
  static propTypes = {
    getDeliveryDataAttempt: func.isRequired,
    getDeliveryDataSuccess: func.isRequired,
    getDeliveryDataFail: func.isRequired,
    deliveryData: arrayOf(
      shape({
        name: string.isRequired,
        width: string.isRequired,
        type: string.isRequired,
      })
    ).isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email:"",
      phone: "",
      country:"",
      state: "",
      city: "",
      address: ""

    };

    this.onSubmit = this.onSubmit.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
  }
  componentDidMount() {
    this.props.getDeliveryDataAttempt();
    this.props.getDeliveryDataSuccess();
    this.props.getDeliveryDataFail();
  }
  
  onSubmit(){
    let validate = false;
    Object.keys(this.state).forEach((key)=>{
      if(this.state[key] !== ""){
        validate =true;
     }
    });
    if(validate){
      // const newUser = {...this.state}
      // console.log(newUser);
    }
    else{
      // console.log("Fill it correctly")
    }
  }
  getUserDetails(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

 
  showtextFields(Data) {
    return Data.map(data => (
      <TextField
        name={data.name}
        type={data.type}
        placeholder={data.placeholder}
        width={data.width}
        key={data.id}
        getUserDetails={this.getUserDetails}
        parent={this.state}
      />
    ));
  }
  render() {
    return (
      <Fragment>
        <div id="Delivery">
          <HeroTitle name="Delivery" section="2" />

          <div className="d-form">
            <form>
              {this.showtextFields(this.props.deliveryData.data)}
              <Button value="Next step" arrow="true" onClick={this.onSubmit} />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ deliveryData }) {
  return {
    deliveryData,
  };
}

export default connect(
  mapStateToProps,
  {
    getDeliveryDataAttempt: actions.getDeliveryDataAttempt,
    getDeliveryDataSuccess: actions.getDeliveryDataSuccess,
    getDeliveryDataFail: actions.getDeliveryDataFail,
  }
)(Delivery);
