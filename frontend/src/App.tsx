import React from "react";
import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowseCourses />
    </React.Fragment>
  );
}

export default App;
