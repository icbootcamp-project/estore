import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import Button from "../Button/Button";
import PaymentMethod from "./PaymentMethod";
import { paymentFields, paymentTypes } from '../appData';
import TextField from "../TextField/TextField";

function showtextFields(tfData) {
  return tfData.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={data.id}
    />
  ));
}

const Payment = () => (
  <Fragment>
    <div id="Payment">
      <HeroTitle name="Payment" section="1" />
      <div className="p-form">
        <form>
          <PaymentMethod data={paymentTypes} />
          {showtextFields(paymentFields)}
          <Button value="Next step" arrow="true" />
        </form>
        <div className="clear" />
      </div>
    </div>
  </Fragment>
);

export default Payment;
