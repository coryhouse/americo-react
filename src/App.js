// 1. TypeScript
// 2. Implement login and load user data
// 3. Implement a 2nd page and allow navigating between the two
// 4. Display confirmation page with "finished form" (not a pdf)
// 5. Write automated tests
// 6. Validate onBlur/onChange - Can use "discover" pattern for onBlur.
// 7. async/await
// 8. Error handling
// 9. React-query / swr
// 10. Hooks
// 11. Keys
// 12. proptypes

import React, { useState } from "react";
import "./App.css";
import Input from "./Input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { saveInsured } from "./api/insured";

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

  function getErrors(id) {
    const _errors = id ? { ...errors } : {}; // using underscore prefix to avoid naming collision with errors in state.
    if (id) delete _errors[id];

    if ((id === "name" || !id) && !insured.name) {
      _errors.name = "Name is required";
    }

    if ((id === "dob" || !id) && !insured.dob) {
      _errors.dob = "DOB is required";
    }

    return _errors;
  }

  function validate(event) {
    setErrors(getErrors(event.target.id));
  }

  function onSubmit(event) {
    event.preventDefault(); // Tell the browser not to reload.

    // If errors exist, stop submit.
    const newErrors = getErrors();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // Return early if errors exist.

    saveInsured(insured).then((response) => {
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

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
