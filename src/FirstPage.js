import React from "react";
import { Link } from "react-router-dom";
class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/secondpage">Next</Link>
      </div>
    );
  }
}

//to enable other page to import FirstPage
export default FirstPage;
