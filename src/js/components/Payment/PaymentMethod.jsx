import React from "react";
import { arrayOf, object } from "prop-types";

function showMethodItem(paymentData) {
  return paymentData.map(item => {
    const select = item.value;
    let addclass;
    if (select) {
      addclass = "pm-radio radio-select";
    }
    const src = `./img/payment/${item.src}`;
    return (
      <div className="pm-half" key={item.id}>
        <img src={src} alt={item.name} />
        <div className="pm-c">
          <div className={addclass} />
        </div>
      </div>
    );
  });
}

const PaymentMethod = ({ paymentTypes }) => (
  <div id="PaymentMethod">{showMethodItem(paymentTypes)}</div>
);

PaymentMethod.propTypes = {
  paymentTypes: arrayOf(object).isRequired
}

export default PaymentMethod;
