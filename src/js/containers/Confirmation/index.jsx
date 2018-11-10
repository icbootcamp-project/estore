import React, { Fragment } from "react";
import HeroTitle from "../Common/HeroTitle";

const Confirmation = () => (
  <Fragment>
    <div id="confirmation">
      <HeroTitle name="Confirmation" section="0" />
      <div className="confirm-icon">
        <div className="circle-icon">
          <div className="tick-icon" />
        </div>
      </div>
      <div className="confirm-des">
        <h1>Great.Your order has been placed.</h1>
      </div>
      <div className="confirm-detail">
        <p>
          Etiam blandit nisi feugiat eros mollis, sed vehicula massa
          tempus.Donec suscipit a lectus et egastas. Meacanas
          fermentum accumsan metus non sagittis.
        </p>
      </div>
    </div>
  </Fragment>
);

export default Confirmation;
