import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { colors } from "../../theme";
import { GradeRange } from "../../types/template";

interface AssessmentCriteriaAppProps {
  assessmentCriteria: GradeRange[] | undefined;
}

const AssessmentCriteriaApproval: React.FC<AssessmentCriteriaAppProps> = ({
  assessmentCriteria,
}) => {
  if (!assessmentCriteria) {
    return null;
  }
  return (
    <Box>
      {assessmentCriteria.map((entry) => (
        <Box style={{ marginBottom: "10px" }}>
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                paddingBottom: "14px",
                paddingTop: "13px",
                paddingRight: "15px",
              }}
            >
              Grade Range:
            </Typography>
            <Typography sx={{ width: 60, marginRight: "15px" }} align="center">
              {entry.min}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                paddingTop: "13px",
                paddingBottom: "14px",
                paddingRight: "15px",
              }}
            >
              to
            </Typography>
            <Typography sx={{ width: 60, marginRight: "15px" }} align="center">
              {entry.max}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                paddingBottom: "14px",
                paddingTop: "13px",
                paddingRight: "15px",
                paddingLeft: "50px",
              }}
            >
              Description:
            </Typography>
            <Typography sx={{ width: 60, marginRight: "15px" }}>
              {entry.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AssessmentCriteriaApproval;
