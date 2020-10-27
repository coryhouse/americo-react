import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

type InputProps = {
  /** HTML ID */
  id?: string;

  /** Placeholder */
  placeholder: string;

  /** Input value */
  value: string | number; // Union type

  /** Function called on change */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Function called on blur */
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Error to display below the component */
  error?: string;
};

export default function Input(props: InputProps) {
  const { id, placeholder, value, onChange, onBlur, error } = props;
  return (
    <Form.Group>
      <Form.Control
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Alert variant="danger">{error}</Alert>}
    </Form.Group>
  );
}
