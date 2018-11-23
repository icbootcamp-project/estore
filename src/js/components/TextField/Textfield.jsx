import React from "react";
import { string } from "prop-types";

const TextField = props => {
  const { type, width, name } = props;
  const size = `tf-${width}`;
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

TextField.propTypes = {
  name: string.isRequired,
  width: string.isRequired,
  type: string.isRequired
};

export default TextField;
