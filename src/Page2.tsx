import React from "react";
import Input from "./Input";
import { PageProps } from "./typings/types";

export default function Page2(props: PageProps) {
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
        value={insured.weight ?? ""} // Set this to an empty string if weight is undefined.
        onChange={onChange}
        onBlur={validate}
        error={errors.weight}
      />
    </>
  );
}
