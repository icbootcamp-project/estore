import React,{Fragment} from "react";

const Button = (props) => {
	const {value,arrow} = props;
	
	
	return ( 
		
		<div id="estore-btn">
            {value}
            {
            arrow &&
            <Fragment>
	          <div className="btn-circle" />
	          <div className="btn-glyphicon">
	            <img src="./img/arrow.png"/>
	          </div>
        	</Fragment>
        	}
        </div>
    	
	);
}
export default Button;
   