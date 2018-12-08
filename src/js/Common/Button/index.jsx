import React, { Fragment } from "react";
import { string,func } from "prop-types";

const Button = ({ value, arrow, onClick }) => (
    <div id="estore-btn" onClick={onClick} role="button" tabIndex={0} onKeyPress="" >
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

Button.propTypes = {
  value: string.isRequired,
  arrow: string.isRequired,
  onClick:func.isRequired
}
export default Button;
