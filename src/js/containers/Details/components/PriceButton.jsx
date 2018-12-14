import React, { Fragment } from 'react';
import { string, bool, object } from 'prop-types';

// const { value, isOpen } = props;
const PriceButton = (props) => {
  const { value, isOpen, className, isImage } = props;

  return (
    <Fragment>
      <div className={`p-btn ${className.classForButton}`}>
        {isImage ? (
          <div className="favourite-icon">
            <img src="./img/header/favourite-icon.png" alt="favourite icon" />
          </div>
        ) : (
          <div className={className.classForText}>
            {value}
            {isOpen ? (
              <Fragment>
                <div className="btn-circle" />
                <div className="btn-glyphicon">
                  <span className="glyphicons glyphicons-play" />
                </div>
              </Fragment>
            ) : null}
          </div>
        )}
      </div>
    </Fragment>
  );
};
PriceButton.defaultProps = {
  value: '',
  isOpen: false,
  isImage: false,
  className: {
    classForText: '',
    classForButton: '',
  },
};

PriceButton.propTypes = {
  value: string,
  isOpen: bool,
  isImage: bool,
  className: object,
};
export default PriceButton;

// ################## THIS IS SAVED TO PRODUCE THE OTHER BUTTON ################
// import React, { Fragment } from "react";
// import { string, bool } from "prop-types";
//
// // const { value, isOpen } = props;
// const PriceButton = props => {
//   const { value, isOpen } = props;
//
//   return (
//     <Fragment>
//       <div className="details">
//         <div className="p-btn">
//           {value}
//           {isOpen ? (
//             <Fragment>
//               <div className="btn-circle" />
//               <div className="btn-glyphicon">
//                 <span className="glyphicons glyphicons-play" />
//               </div>
//             </Fragment>
//           ) : null}
//         </div>
//         <div className="clear" />
//       </div>
//     </Fragment>
//   );
// };
//
// PriceButton.propTypes = {
//   value: string.isRequired,
//   isOpen: bool.isRequired
// };
// export default PriceButton;
