import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import Header from "./components/Header";
import { Box, createTheme, ThemeProvider } from "@mui/material";
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
        <CreateTemplate />
      </Box>
    </ThemeProvider>
  );
}

export default App;
