import React from "react";

const NewForm = (props) => {
  const { name, email, password } = props;
  return (
    <div className="NewForm">
      <h1>New Form</h1>
      <p>User Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password:{password}</p>
    </div>
  );
};

export default NewForm;
