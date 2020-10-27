import React from "react";
import Input from "./Input";
import { PageProps } from "./typings/types";

export default function Page1(props: PageProps) {
  const { insured, onChange, validate, errors } = props;
  return (
    <>
      <Input
        id="name"
        placeholder="Name"
        value={insured.name}
        onChange={onChange}
        onBlur={validate}
        error={errors.name}
      />
      <Input
        id="dob"
        placeholder="Date of Birth"
        value={insured.dob}
        onChange={onChange}
        onBlur={validate}
        error={errors.dob}
      />
    </>
  );
}
