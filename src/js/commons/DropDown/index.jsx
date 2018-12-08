import React from "react";
import { string,func,shape} from "prop-types";

const DropDown = ({ type, width, name,getUserDetails,parent,placeholder }) => (
    <select className={size} name="" >
      <option>{name}</option>
    </select>
);
TextField.propTypes = {
  name: string.isRequired,  // name of the textfield without spaces
  width: string.isRequired, // size of the textfield  e.g ( half,full,onethird)
  type: string.isRequired,  // type of the input ( text,password, email)
  getUserDetails:func.isRequired, // binded method of parent that update the parent state
  parent:shape().isRequired,  // parent state object for controlled input.
  placeholder:string.isRequired // placeholder of the input.
};
export default TextField;
