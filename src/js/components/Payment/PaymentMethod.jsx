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

const PaymentMethod = props => {
  const paymentData = props.data;
  return <div id="PaymentMethod">{showMethodItem(paymentData)}</div>;
};

PaymentMethod.propTypes = {
  data: arrayOf(object).isRequired
}

export default PaymentMethod;
