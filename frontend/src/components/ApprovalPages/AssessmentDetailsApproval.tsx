import {
    MenuItem,
    Select,
    Switch,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
  } from "@mui/material";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import { colors } from "../../theme";
  import React from "react";
  import { AssessmentDetails } from "../../types/template";
  
  interface AssessmentDetailsAppProps {
    assessmentDetails: AssessmentDetails;
  }
  
  const AssessmentDetailsApproval: React.FC<AssessmentDetailsAppProps> = ({
    assessmentDetails,
  }) => {
  
    const displayCourse = [
      { displayName: "Course Title", displayValue: assessmentDetails.courseTitle },
      { displayName: "Course Code", displayValue: assessmentDetails.courseCode },
      { displayName: "FHEQ", displayValue: "Level 4" },
      {
        displayName: "Assessment Activity",
        displayValue: assessmentDetails.assessmentTitle,
      },
      { displayName: "Assessment Number", displayValue: "AE" + assessmentDetails.assessmentNumber },
      {
        displayName: "Assessment Weighting",
        displayValue: assessmentDetails.weighting + " %",
      },
      { displayName: "Course Leader", displayValue: assessmentDetails.courseLeader },
      { displayName: "Sitting", displayValue: assessmentDetails.sitting },
      { displayName: "Assessment Type", displayValue: assessmentDetails.assessmentType },
      { displayName: "Restrictions on Time / Length", displayValue: assessmentDetails.restrictions },
      // this is wrong, figure out what field goes here (down)
      { displayName: "Individual / Group", displayValue: assessmentDetails.modeOfSubmission },
      { displayName: "Issue Date", displayValue: assessmentDetails.issueDate },
      { displayName: "Hand In Deadline", displayValue: assessmentDetails.handInDate },
      { displayName: "Planned Feedback Deadline", displayValue: assessmentDetails.feedbackDeadline },
      { displayName: "Mode of Submission", displayValue: assessmentDetails.modeOfSubmission },
      { displayName: "Anonymous Marketing", displayValue: (assessmentDetails.anonymousMarketing).toString() },
    ];
    return (
      <React.Fragment>
        <TableContainer>
          <Table
            sx={{
              fontSize: "18px",
              fontFamily: "lato",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: colors.red,
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.red,
                },
              },
            }}
          >
            {displayCourse.map((course) => {
              return (
                <TableRow>
                  <TableCell
                    variant="head"
                    width="80%"
                    sx={{ fontWeight: "bold" }}
                  >
                    {course.displayName}
                  </TableCell>
                  <TableCell align="right"> {course.displayValue}</TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  };
  
  export default AssessmentDetailsApproval;  