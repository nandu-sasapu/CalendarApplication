import React, { useState } from "react";

const CommunicationMethods = () => {
  const [methods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Message via LinkedIn", sequence: 2, mandatory: true },
    { name: "Email", description: "Send an Email", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Call the Company", sequence: 4, mandatory: false },
    { name: "Other", description: "Other methods", sequence: 5, mandatory: false },
  ]);

  return (
    <div>
      <h2>Communication Methods</h2>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} (Sequence: {method.sequence}, Mandatory: {method.mandatory ? "Yes" : "No"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethods;
