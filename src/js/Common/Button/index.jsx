import React, { Fragment } from "react";
import { string } from "prop-types";

const Button = props => {
  const { value, arrow } = props;

  return (
    <div id="estore-btn">
      {value}
      {arrow && (
        <Fragment>
          <div className="btn-circle" />
          <div className="btn-glyphicon">
            <img src="./img/arrow.png" alt="" />
          </div>
        </Fragment>
      )}
    </div>
  );
};
Button.propTypes = {
  value: string.isRequired,
  arrow: string.isRequired
}
export default Button;
