// 1. TypeScript
// 2. Extract and centralize API calls
// 3. Implement login and load user data
// 4. Implement a 2nd page and allow navigating between the two
// 5. Display confirmation page with "finished form" (not a pdf)
// 6. Write automated tests

import React, { useState } from "react";
import "./App.css";
import Input from "./Input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const emptyInsured = {
  name: "",
  dob: "",
};

export default function App() {
  const [insured, setInsured] = useState(emptyInsured);
  const [errors, setErrors] = useState({});

  function onChange(event) {
    setInsured({
      ...insured, // Copy state using the spread syntax. Must copy state since state is immutable.
      [event.target.id]: event.target.value, // Using a computed property to reference a property using a variable
    });
  }

  function getErrors() {
    const _errors = {}; // using underscore prefix to avoid naming collision with errors in state.
    if (!insured.name) _errors.name = "Name is required";
    if (!insured.dob) _errors.dob = "DOB is required";
    return _errors;
  }

  function onSubmit(event) {
    event.preventDefault(); // Tell the browser not to reload.

    // If errors exist, stop submit.
    const newErrors = getErrors();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // Return early if errors exist.

    fetch("http://localhost:3001/insured", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(insured),
    }).then((response) => {
      console.log(response);
      setInsured(emptyInsured); // Empty the form.
      alert("saved");
    });
  }

  return (
    <Container>
      <h1>App</h1>
      <Form onSubmit={onSubmit}>
        <Input
          id="name"
          placeholder="Name"
          value={insured.name}
          onChange={onChange}
          error={errors.name}
        />

        <Input
          id="dob"
          placeholder="Date of Birth"
          value={insured.dob}
          onChange={onChange}
          error={errors.dob}
        />

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
