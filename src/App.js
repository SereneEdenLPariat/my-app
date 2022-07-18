import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import FirstPage from "./FirstPage.js";
import SecondPage from "./SecondPage.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/secondpage" element={<SecondPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
