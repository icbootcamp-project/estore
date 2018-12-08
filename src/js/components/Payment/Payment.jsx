import React, { Component,Fragment } from "react";
import HeroTitle from "../../Common/HeroTitle";
import Button from "../../Common/Button";
import PaymentMethod from "./PaymentMethod";
import { paymentFields, paymentTypes } from '../appData';
import TextField from "../../Common/TextField";

function renderTextFields(){
  return paymentFields.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={data.id}
      placeholder={data.placeholder}
      getUserDetails={()=>{}}
      parent={{}}
    />
  ));
}

export default class Payment extends Component{

  constructor(){
    super();

    this.state ={
      cardname:"",
      cardnumber:"",
      month:"",
      year:"",
      cvn:"",
      paymentType:"",
      jazzCash:false,
      cashOnDelivery:false
      
    }
    this.selectPaymentType = this.selectPaymentType.bind(this);
  }
  selectPaymentType(type){
    if(type === "jazzCash"){
      this.setState({
        jazzCash:true,
        cashOnDelivery:false,
        paymentType:type
      });
    }
    if(type === "cashOnDelivery"){
        this.setState({
          jazzCash:false,
          cashOnDelivery:true,
          paymentType:type
        });
    }
  }
  
  renderPaymentMethod(){

    return paymentTypes.map(({id,name,src}) => (
        <PaymentMethod 
          id={id}
          name={name}
          src={src}
          selectPaymentType={this.selectPaymentType}
          selected={this.state[name]}
        /> 
      )

    );
    
  }
  render(){
    return(
      <Fragment>
        <div id="Payment">
          <HeroTitle name="Payment" section="1" />
          <div className="p-form">
            <form>
              <div id="PaymentMethod">
                {this.renderPaymentMethod()}
              </div>
              {renderTextFields()}
              <Button value="Next step" arrow="true" />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
} 

