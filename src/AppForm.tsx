import React from "react";
import Form from "react-bootstrap/Form";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Insured } from "./typings/types";

type AppFormProps = {
  insured: Insured;
  currentPage: number;
  isLoading: boolean;
  validate: (event: React.FocusEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onPrevious: () => void;
  errors: object;
};

export default function AppForm({
  isLoading,
  insured,
  onSubmit,
  onChange,
  onPrevious,
  validate,
  errors,
  currentPage,
}: AppFormProps) {
  function renderPage() {
    const props = {
      // Object shorthand
      insured,
      onChange,
      validate,
      errors,
    };

    if (currentPage === 1) return <Page1 {...props} />;
    if (currentPage === 2) return <Page2 {...props} />;
  }

  function renderForm() {
    if (isLoading) return <p>Loading...</p>;

    return (
      <Form onSubmit={onSubmit}>
        {renderPage()}
        {currentPage > 1 && (
          <Button type="button" variant="primary" onClick={onPrevious}>
            Previous
          </Button>
        )}
        <Button type="submit" variant="primary">
          Next
        </Button>
      </Form>
    );
  }

  return (
    <Container>
      <h1>App</h1>
      <p>Step {currentPage} of 2</p>
      {renderForm()}
    </Container>
  );
}
