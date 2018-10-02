import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import PaymentData from "./PaymentData";
import Button from "../Button/Button";
import PaymentMethod from "./PaymentMethod";
import TextField from "../TextField/TextField";

function showtextFields(tfData) {
  const textFields = tfData.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={Math.random()}
    />
  ));

  return textFields;
}

const Payment = () => (
  <Fragment>
    <div id="Payment">
      <HeroTitle name="Payment" section="1" />

      <div className="p-form">
        <form>
          <PaymentMethod data={PaymentData.pmData} />
          {showtextFields(PaymentData.tfData)}
          <Button value="Next step" arrow="true" />
        </form>
        <div className="clear" />
      </div>
    </div>
  </Fragment>
);
export default Payment;
