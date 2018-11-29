import React, { Fragment } from "react";
import { string, bool } from "prop-types";

// const { value, isOpen } = props;
const PriceButton = props => {
  const { value, isOpen, color, isImage } = props;

  return (
    <Fragment>
      <div className="p-btn" style={{ backgroundColor: color }}>
        {isImage ? (
          <div className="favourite-icon">
            <img src="./img/header/favourite-icon.png" alt="favourite icon" />
          </div>
        ) : (
          <div>
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
  value: "",
  isOpen: false,
  isImage: false
};

PriceButton.propTypes = {
  value: string,
  isOpen: bool,
  isImage: bool,
  color: string.isRequired
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
