import React from "react";
import Input from "./Input";

export default function Page2(props) {
  const { insured, onChange, validate, errors } = props;
  return (
    <>
      <label htmlFor="isSmoker">Do you smoke?</label>
      <input
        type="checkbox"
        id="isSmoker"
        checked={insured.isSmoker}
        onChange={onChange}
        onBlur={validate}
      />

      <Input
        id="weight"
        placeholder="Weight"
        value={insured.weight ?? ""} // Set this to an empty string if weight is null.
        onChange={onChange}
        onBlur={validate}
        error={errors.weight}
      />
    </>
  );
}
