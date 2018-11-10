import React,{ Fragment } from "react";
import { func,string } from "prop-types";

const Button = props => {
  const { value, arrow, handler } = props;

  return (
    <div 
      id="estore-btn" 
      onClick={handler} 
      role="button" 
      onKeyPress={handler} 
      tabIndex={0}
    >
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
  arrow: string.isRequired,
  handler:func.isRequired
}
export default Button;
