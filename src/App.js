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
// 13. a11y

import React, { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { saveInsured } from "./api/insured";

const emptyInsured = {
  name: "",
  dob: "",
  isSmoker: false,
  weight: null,
};

export default function App() {
  const [insured, setInsured] = useState(emptyInsured); // Hey react, when this data changes, redraw the screen for me.
  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  function onChange(event) {
    setInsured({
      ...insured, // Copy state using the spread syntax. Must copy state since state is immutable.
      [event.target.id]: event.target.value, // Using a computed property to reference a property using a variable
    });
  }

  function getErrors(id) {
    const _errors = id ? { ...errors } : {}; // using underscore prefix to avoid naming collision with errors in state.
    if (id) delete _errors[id];

    if (currentPage === 1) {
      if ((id === "name" || !id) && !insured.name) {
        _errors.name = "Name is required";
      }

      if ((id === "dob" || !id) && !insured.dob) {
        _errors.dob = "DOB is required";
      }
    }

    if (currentPage === 2) {
      if ((id === "weight" || !id) && !insured.weight) {
        _errors.weight = "Weight is required";
      }
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
      setCurrentPage(currentPage + 1);
    });
  }

  function renderPage() {
    const props = {
      insured: insured,
      onChange: onChange,
      validate: validate,
      errors: errors,
    };

    if (currentPage === 1) return <Page1 {...props} />;
    if (currentPage === 2) return <Page2 {...props} />;
  }

  return (
    <Container>
      <h1>App</h1>
      <Form onSubmit={onSubmit}>
        {renderPage()}
        <Button type="submit" variant="primary">
          Next
        </Button>
      </Form>
    </Container>
  );
}
