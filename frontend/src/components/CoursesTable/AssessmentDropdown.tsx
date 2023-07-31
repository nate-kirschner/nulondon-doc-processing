import { AccordionDetails, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AssessmentRow from "./AssessmentRow";
import { AssessmentPreview } from "../../types/assessments";
import axios from "axios";
import { colors } from "../../theme";

interface AssessmentDropdownProps {
  courseCode: string;
}

const AssessmentDropdown: React.FC<AssessmentDropdownProps> = ({
  courseCode,
}) => {
  const [assessments, setAssessments] = useState<AssessmentPreview[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/assessments/${courseCode}/`
        );
        setLoading(false);
        setAssessments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [courseCode]);

  return (
    <AccordionDetails>
      {loading ? 
      <Box sx={{ backgroundColor: colors.gray, padding: "24px" }}>
        <Typography sx={{ fontSize: "16px", textAlign: "center", color: colors.black }}>Loading...</Typography>
      </Box> : 
      assessments?.map((assessment) => {
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
