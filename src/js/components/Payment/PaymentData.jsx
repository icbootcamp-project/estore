const PaymentData = [
	{
		name: "Card name",
		width: "full",
		type: "text"

	},
	{
		name:"Card number",
		width:"full",
		type:"type"
	},
	{
		name:"MM",
		width:"onethird",
		type:"dropdown"
	},
	{
		name:"YY",
		width:"onethird",
		type:"dropdown"
	},
	{
		name:"",
		width:"onethird",
		type:"text"
	}
];
export const PaymentMethodData = [
	{
		name:"Jazz cash",
		width:"half",
		src:"jazzcash.png",
		value:"true"
	},
	{
		name:"Cash on delivery",
		width:"half",
		src:"cashondelivery.png",
		value:"false"
	}
];
export default PaymentData;