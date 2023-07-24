import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import CreateTemplate from "./components/CreateTemplate";

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
  },
});

function App() {
  const [page, setPage] = useState<string>("Browse Courses");
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        {
        page === "Browse Courses" ? (
          <BrowseCourses 
          setPage={setPage}/>
        ) : <CreateTemplate 
          setPage={setPage}/>}
      </Box>
    </ThemeProvider>
  );
}

export default App;
