import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";
import PaymentData ,{PaymentMethodData} from "./PaymentData";
import Button from "../Button/Button";
import PaymentMethod from "./PaymentMethod";

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
          <PaymentMethod data={PaymentMethodData} />
          {showtextFields()}
          <Button value="Next step" arrow="true" />
        </form>
        <div className="clear" />
      </div>
      
    </div>
  </Fragment>
);
export default Payment;
   