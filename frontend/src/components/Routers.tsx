import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BrowseCourses from "./BrowseCourses";
import CreateTemplate from "./CreateTemplate";
import FilledTemplateComponent from "./FilledTemplate";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrowseCourses />} />
        <Route path="/template" element={<CreateTemplate />} />
        <Route path="/filled-template" element={<FilledTemplateComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
