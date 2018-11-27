import React, { Fragment } from "react";
// import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { func, arrayOf, shape, string } from "prop-types";

import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";

import Button from "../Button/Button";
import * as actions from "../../actions";


const SkeletonLoading = () => (
  <Fragment>
    <div id="Delivery">
      {  /*  <HeroTitle name="Delivery" section="2" />
    </div>

    <div className="d-form">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>  */  }
    </div> 
  </Fragment>
);

class Delivery extends React.Component {

  static propTypes = {
    getDeliveryData: func.isRequired,
    deliveryData: shape(
      arrayOf(
        shape({
          name: string.isRequired,
          width: string.isRequired,
          type: string.isRequired,
          placeholder:string.isRequired
        })
      ).isRequired
    ).isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      lname: "",
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
    this.props.getDeliveryData();
  }
  onSubmit(e){
    e.preventDefault();
    let validate = false;
    const userData = this.state;
    const keys = Object.keys(userData);
    keys.forEach((key)=>{
      if(this.state[key] !== ""){
        validate =true;
     }
    })

    if(validate){
      // const newUser = {
      //   firstname: this.state.fname,
      //   lastname:this.state.lname,
      //   email:this.state.email,
      //   phone:this.state.phone,
      //   country:this.state.country,
      //   state:this.state.state,
      //   city:this.state.city,
      //   address:this.state.address
      // };
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
    const textFields=Data.map(data => (
      <TextField
        name={data.name}
        type={data.type}
        width={data.width}
        placeholder={data.placeholder}
        key={Math.random()}
        getUserDetails={this.getUserDetails}
      />
    ));
  
    return textFields;
  }

  render() {
    return this.props.deliveryData.data.length ? (
      <Fragment>
        <div id="Delivery">
          <HeroTitle name="Delivery" section="2" />

          <div className="d-form">
            <form>
              {this.showtextFields(this.props.deliveryData.data)}
              <Button value="Next step" arrow="true" handler={this.onSubmit} />
            </form>
          </div>
        </div>
      </Fragment>
    ) : (
      <SkeletonLoading />
    );
  }
}

function mapStateToProps({ deliveryData }) {
  return {
    deliveryData
  };
}

export default connect(
  mapStateToProps,
  {
    getDeliveryData: actions.getDeliveryData
  }
)(Delivery);
