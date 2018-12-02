import React, { Fragment } from 'react';
import { string,object} from 'prop-types';

const Button = (props) => {
  const { value, arrow,style } = props;

  return (
    <div id="estore-btn" style={style}>
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
  style:object.isRequired      
  // pass the object css with line height for the button height
};
export default Button;
