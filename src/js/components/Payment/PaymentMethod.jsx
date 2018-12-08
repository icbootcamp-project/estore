import React from "react";
import { string,bool,func } from "prop-types";

const PaymentMethod = ({ id,src,name,selectPaymentType,selected }) => (
    <div className="pm-half" key={id} onClick={e => selectPaymentType(name,e)} tabIndex="0" onKeyPress="" role="button">
          <img src={`./img/payment/${src}`} alt={name} />
          <div className="pm-c">
            {
               selected ? <div className="pm-radio radio-select" /> : <div className="pm-radio" />
            }
          </div>
    </div>
  
);

PaymentMethod.propTypes = {
  id:string.isRequired,
  src:string.isRequired,
  name:string.isRequired,
  selectPaymentType:func.isRequired,
  selected:bool.isRequired
}

export default PaymentMethod;
