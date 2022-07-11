import React from "react";
import { Link } from "react-router-dom";

class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/SecondPage">Next</Link>
      </div>
    );
  }
}
export default FirstPage;
