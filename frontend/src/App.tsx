import React from "react";
import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <BrowseCourses />
    </Box>
  );
}

export default App;
