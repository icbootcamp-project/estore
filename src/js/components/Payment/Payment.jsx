import React, { Fragment } from "react";

const Payment = () => ( 
  <Fragment>
    <div id="Payment">

      <div className="p-title">
        <h1>Payment</h1>
      </div>

      <div className="p-form">
        <form>
          <div className="p-tf2">
            <div className="p-icon">
              <img src="../img/payment/jazzcash.png" alt="jazzcash" />
            </div>
          </div>
          <div className="p-tf3">
            <div className="p-icon">
              <img src="../img/payment/cashondelivery.png"alt="cash-on-delivery" />
            </div>
          </div>
          <input type="text" className="p-tf1" placeholder="Card name" />
          <input type="text" className="p-tf1" placeholder="Card number" />
          <select className="p-tf4">
            <option>MM</option>
          </select>
          <select className="p-tf4">
            <option>YY</option>
          </select>
          <input type="text" className="p-tf4" placeholder="" />
          <div className="p-btn">
            Next step
            <div className="btn-circle" />
            <div className="btn-glyphicon">
              <span className="glyphicons glyphicons-play" />
            </div>
          </div>
        </form>
        <div className="clear" />
      </div>
      
    </div>
  </Fragment>
);
export default Payment;
   