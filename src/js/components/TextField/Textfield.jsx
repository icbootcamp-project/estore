import React from "react";
import { func,string } from "prop-types";

class TextField extends React.Component{ 
  constructor(props){
    super(props);
    this.state ={
      fname:""
    }

  }
  getVal(e){

    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    console.log("textfield")
    const { type, width, placeholder , name} = props;
    let { getUserDetails } = props;
    const size = `tf-${width}`;
    // for dropdown
    let dropdown = false;
    if (type === "dropdown") {
      dropdown = true;
    }

    return (
      dropdown ? (
      <select className={size}>
        <option>{name}</option>
      </select>
      ) : (
      <input 
        type={type} 
        className={size}
        onChange={this.getVal} 
        placeholder={placeholder}
        name={name}
      />
      );
    );
  }
};
TextField.propTypes = {
  name: string.isRequired,
  width: string.isRequired,
  type: string.isRequired,
  placeholder:string.isRequired,
  getUserDetails:func.isRequired
};
export default TextField;
