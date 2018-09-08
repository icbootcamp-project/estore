const PaymentData = {
	tfData:[
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

	],
	pmData:[
	{
		name:"Jazz cash",
		src:"jazzcash.png",
		value:true
	},
	{
		name:"Cash on delivery",
		src:"cashondelivery.png",
		value:false
	}
	]
}
export default PaymentData;