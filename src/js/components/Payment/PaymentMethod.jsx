import React from "react";

function showMethodItem(paymentData){

  const methodItem = paymentData.map((data)=>{
  	let size,src;
  	 if(data.width === "half"){
  	 		size = "pm-"+data.width;
  	 }
  	 src = "./img/payment/"+data.src;
    return (
    	  <div className={size}>
    	    <img src={src} alt={data.name}/>

    	  </div>
    	  );
  });
  return methodItem;
}
const PaymentMethod = (props) => {

	const paymentData = props.data;
	console.log(paymentData)

	return (
	<div id="PaymentMethod">
		{ showMethodItem(paymentData) }
	</div>
	);
}
export default PaymentMethod;
