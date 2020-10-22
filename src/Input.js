import React from "react";

export default function Input(props) {
  return (
    <div>
      <input
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <p aria-live="assertive" className="error">
        {props.error}
      </p>
    </div>
  );
}
