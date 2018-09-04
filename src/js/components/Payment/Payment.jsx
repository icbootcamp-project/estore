import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";
import PaymentData from "./PaymentData";
import Button from "../Button/Button";

function showtextFields(){

  const textFields =  PaymentData.map((data)=>{

    console.log(data)
    return <TextField name={data.name} type={data.type} width={data.width} key={Math.random()} />


  });

  return textFields;
}
const Payment = () => ( 
  <Fragment>
    <div id="Payment">

      <HeroTitle name="Payment" section="1" />

      <div className="p-form">
        <form>
          {showtextFields()}
          <Button value="Next step" arrow="true" />
        </form>
        <div className="clear" />
      </div>
      
    </div>
  </Fragment>
);
export default Payment;
   