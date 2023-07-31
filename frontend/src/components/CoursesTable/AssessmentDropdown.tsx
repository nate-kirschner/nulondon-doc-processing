import { AccordionDetails } from "@mui/material";
import { useEffect, useState } from "react";
import AssessmentRow from "./AssessmentRow";
import { AssessmentPreview } from "../../types/assessments";
import axios from "axios";

interface AssessmentDropdownProps {
  courseCode: string;
}

const AssessmentDropdown: React.FC<AssessmentDropdownProps> = ({
  courseCode,
}) => {
  const [assessments, setAssessments] = useState<AssessmentPreview[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/assessments/${courseCode}/`
        );
        setAssessments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [courseCode]);

  return (
    <AccordionDetails>
      {assessments?.map((assessment) => {
        return (
          <AssessmentRow
            assessmentId={assessment.id}
            courseId={courseCode}
            {...assessment}
          />
        );
      })}
    </AccordionDetails>
  );
};

export default AssessmentDropdown;
