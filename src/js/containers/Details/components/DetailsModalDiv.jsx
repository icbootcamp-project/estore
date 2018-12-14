import React from 'react';
import ModalCenterDiv from './ModalCenterDiv';
// class DetailsModalDiv extends React.Component{
//   constructor(){
//   }
// }
const DetailsModalDiv = (props) => (
  <div className="modal-div-here">
    <div className="center-div-for-modal-details">
      <ModalCenterDiv {...props} />
    </div>
  </div>
);
export default DetailsModalDiv;
