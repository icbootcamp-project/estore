import React, { Fragment } from "react";

const Textfield = props => {
	let { type, width, name } = props;
	const size = "tf-" + width;
	// for dropdown
	let dropdown = false;
	if (type === "dropdown") {
		dropdown = true;
	}

	return dropdown ? (
		<select className={size}>
			<option>{name}</option>
		</select>
	) : (
		<input type={type} className={size} placeholder={name} />
	);
};
export default Textfield;
