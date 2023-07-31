import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import BrowseCourses from "./BrowseCourses";
import CreateTemplate from "./CreateTemplate";
import AssessmentRow from "./CoursesTable/AssessmentRow";
import ApprovalTable from "./ApprovalPage/Approval";

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<BrowseCourses />} />
            <Route path="/template" element={<CreateTemplate />} />
            <Route path="/approval" element={<ApprovalTable />} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
