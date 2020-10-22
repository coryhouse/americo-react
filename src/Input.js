import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

export default function Input(props) {
  return (
    <Form.Group>
      <Form.Control
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <Alert variant="danger">{props.error}</Alert>}
    </Form.Group>
  );
}
