import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";
import DeliveryData from "./DeliveryData";
import Button from "../Button/Button";

function showtextFields(){
    const textFields = DeliveryData.map(data => {
  
      return (
        <TextField
          name={data.name}
          type={data.type}
          width={data.width}
          key={Math.random()}
        />
      );
    });

    return textFields;
}
const Delivery = () => ( 
    <Fragment>
      <div id="Delivery">
        
        <HeroTitle name="Delivery" section="2" />

        <div className="d-form">
          <form>
            {showtextFields()}
            <Button value="Next step" arrow="true" />
          </form>
          
        </div>
        
      </div>
    </Fragment>
);
export default Delivery;
   