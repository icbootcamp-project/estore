import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";
import { deliveryFields } from "../appData";
import Button from "../Button/Button";

function showtextFields(Data) {
  return Data.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={data.id}
    />
  ));
}

const Delivery = () => (
  <Fragment>
    <div id="Delivery">
      <HeroTitle name="Delivery" section="2" />
      <div className="d-form">
        <form>
          {showtextFields(deliveryFields)}
          <Button value="Next step" arrow="true" />
        </form>
      </div>
    </div>
  </Fragment>
);

export default Delivery;
