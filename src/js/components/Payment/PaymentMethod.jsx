import React from "react";
import { shape, string, boolean } from "prop-types";

function showMethodItem(paymentData) {
  const methodItem = paymentData.map(data => {
    const select = data.value;
    let addclass;
    if (select) {
      addclass = "pm-radio radio-select";
    }
    const src = `./img/payment/${data.src}`;
    return (
      <div className="pm-half">
        <img src={src} alt={data.name} />
        <div className="pm-c">
          <div className={addclass} />
        </div>
      </div>
    );
  });
  return methodItem;
}
const PaymentMethod = props => {
  const paymentData = props.data;


  return <div id="PaymentMethod">{showMethodItem(paymentData)}</div>;
};
PaymentMethod.propTypes = {
  data: shape({
    name: string.isRequired,
    src: string.isRequired,
    value: boolean
  }).isRequired
}
export default PaymentMethod;
