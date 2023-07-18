import "./App.css";
import BrowseCourses from "./components/BrowseCourses";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowseCourses />
    </ThemeProvider>
  );
}

export default App;
