import React, { Fragment } from "react";
import { string,func,shape } from "prop-types";

const Button = ({ value, arrow, onClick, style }) => (
    <div id="estore-btn" style={style} onClick={onClick} role="button" tabIndex={0} onKeyPress={()=>{}} >
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
  arrow: string,
  onClick:func.isRequired,
  style:shape()      // pass the object for styling
  
};
Button.defaultProps = {
  arrow:"false",
  style:{}
}
export default Button;
