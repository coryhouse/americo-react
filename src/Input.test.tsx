import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should display an error when passed", () => {
    render(
      <Input
        placeholder=""
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        error="Example error"
      />
    );
  });
});
