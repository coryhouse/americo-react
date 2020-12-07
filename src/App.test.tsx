import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should show the loading message on initial load", () => {
    render(<App />);
    screen.getByText("Loading...");
  });

  it("should populate the form with placeholders", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByPlaceholderText("Name");
      screen.getByPlaceholderText("Date of Birth");
    });
  });

  // it('should populate the form with values from the db', () => {
  //   render(<App />);
  //   screen.
  // });

  test("renders page 1", () => {
    render(<App />);
    const header = screen.getByText("App");
    expect(header).toBeInTheDocument();
    screen.getByText("Step 1 of 2");
  });
});
