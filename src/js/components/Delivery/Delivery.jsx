import React, { Fragment } from "react";

const Delivery = () => ( 
  <Fragment>
    <div id="Delivery">

      <div className="d-title">
        <h1>Delivery</h1>
      </div>

      <div className="d-form">
        <form>
          <input type="text" className="d-tf1" placeholder="First name" />
          <input type="text" className="d-tf1" placeholder="Last name" />
          <input type="text" className="d-tf1" placeholder="E-mail" />
          <input type="text" className="d-tf1" placeholder="Phone" />
          <input type="text" className="d-tf1" placeholder="Country" />
          <input type="text" className="d-tf2" placeholder="State" />
          <input type="text" className="d-tf3" placeholder="City" />
          <input type="text" className="d-tf1" placeholder="Address" />
          <div className="d-btn">
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
export default Delivery;
   