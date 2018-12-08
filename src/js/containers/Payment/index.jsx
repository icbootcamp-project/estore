import React, { Component,Fragment } from "react";

import HeroTitle from "../../commons/HeroTitle";
import Button from "../../commons/Button";
import PaymentMethod from "./components/PaymentMethod";
import {paymentFields,paymentTypes } from "./data";
import TextField from '../../commons/TextField';

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
    this.getPaymentDetais = this.getPaymentDetais.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    // console.log(this.state)
    this.state.paymentType = ""
  }
  getPaymentDetais(e){
    this.setState({
      [e.target.name]:e.target.value
    })
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
  
  renderTextFields(){
    return paymentFields.map(data => (
      <TextField
        name={data.name}
        type={data.type}
        width={data.width}
        key={data.id}
        placeholder={data.placeholder}
        getUserDetails={this.getPaymentDetais}
        parent={this.state}
      />
    ));
  }
  renderPaymentMethod(){
    return paymentTypes.map(({id,name,src}) => (
        <PaymentMethod 
          id={id}
          key={id}
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
              {this.renderTextFields()}
              <Button value="Next step" arrow="true"  onClick={this.onSubmit} />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
} 

