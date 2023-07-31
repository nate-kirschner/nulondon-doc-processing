import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import CreateTemplate from "./components/CreateTemplate";
import AppRouter from "./components/Routers";
import ApprovalTable from "./components/ApprovalPage/Approval";

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
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
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
