import React from "react";
import PaymentData from "./PaymentData";

function showtextFields(){

  const textFields =  PaymentData.map((data)=>{

    console.log(data)
    return <TextField name={data.name} type={data.type} width={data.width} key={Math.random()} />


  });

  return textFields;
}
const PaymentMethod = (props) => ( 
  
    <div id="PaymentMethod">

      
      
    </div>
 
);
export default PaymentMethod;
   