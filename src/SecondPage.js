import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SecondPage() {
  const [name, setName] = useState("");
  function onChangeHandler(e) {
    var newname = e.target.value;
    setName(newname);
  }

  return (
    <div>
      <div>
        <div>
          <Link to="/">Previous</Link>
        </div>
        <label htmlFor="inputName">Name:</label>
        <input
          id="inputname"
          name="Name"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <textarea col={100} row={50} value={name} />
    </div>
  );
}

export default SecondPage;
