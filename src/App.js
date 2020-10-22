import React, { useState } from "react";

export default function App() {
  const [insured, setInsured] = useState({
    name: "",
    dob: "",
  });

  function onChange(event) {
    setInsured({
      ...insured, // Copy state using the spread syntax. Must copy state since state is immutable.
      [event.target.id]: event.target.value, // Using a computed property to reference a property using a variable
    });
  }

  return (
    <>
      <h1>App</h1>
      <form>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={insured.name}
            onChange={onChange}
          />
        </div>

        <div>
          <input
            id="dob"
            type="text"
            placeholder="Date of Birth"
            value={insured.dob}
            onChange={onChange}
          />
        </div>
      </form>
    </>
  );
}
