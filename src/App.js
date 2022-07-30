import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage.js";
import NewForm from "./NewForm.js";
import SecondPage from "./SecondPage.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/NewForm" element={<NewForm />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
