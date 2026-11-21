import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;

  return (
    <>
      <input className="h-5 w-5 text-lg accent-primary" id={id} {...rest} />
      <label htmlFor={id} className="text-sm text-gray-01 ml-4">
        {label}
      </label>
    </>
  );
}

export default CheckBox;
