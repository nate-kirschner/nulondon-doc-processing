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
import React, { useState } from "react";
import { AssessmentDetails } from "../../types/templates";

const Details: React.FC = () => {
  const courseDummy = {
    title: "Course 1",
    code: "IS3500",
    credits: 4,
    assessments: [
      { title: "Assessment 2", weighting: 50, versions: [1, 2, 3] },
    ],
  };
  const displayCourse = [
    { displayName: "Course Title", displayValue: courseDummy.title },
    { displayName: "Course Code", displayValue: courseDummy.code },
    { displayName: "FHEQ", displayValue: "Level 4" },
    { displayName: "Sitting", displayValue: "First Sitting" },
    {
      displayName: "Assessment",
      displayValue: courseDummy.assessments[0].title,
    },
    {
      displayName: "Version",
      displayValue: courseDummy.assessments[0].versions[2],
    },
    { displayName: "Assessment Number", displayValue: "AE4" },
    {
      displayName: "Assessment Weighting",
      displayValue: courseDummy.assessments[0].weighting + " %",
    },
  ];

  const [assessmentDetails, setAssessmentDetails] = useState<AssessmentDetails>(
    {
      courseTitle: "",
      courseCode: "",
      FHEQ: "",
      sitting: "",
      assessmentTitle: "",
      version: 0,
      assessmentNumber: "",
      weighting: "",
      courseLeaser: "",
      assessmentType: "",
      restrictions: "",
      issueDate: new Date(),
      handInDate: new Date(),
      feedbackDeadline: new Date(),
      modeOfSubmission: "",
      anonymousMarketing: false,
    }
  );

  const handleAssessmentDetailsChange = (
    field: keyof AssessmentDetails,
    value: string | number | Date | boolean | null
  ) => {
    setAssessmentDetails((prevDetails) => {
      // handles date fields
      if (field === "issueDate" || field === "handInDate") {
        return {
          ...prevDetails,
          [field]: value === null ? new Date() : value,
        };
      }
      return {
        ...prevDetails,
        [field]: value,
      };
    });
    console.log(assessmentDetails);
  };

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
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Course Leader
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={assessmentDetails.courseLeaser}
                onChange={(e) =>
                  handleAssessmentDetailsChange("courseLeaser", e.target.value)
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Assessment Type
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={assessmentDetails.assessmentType}
                onChange={(e) =>
                  handleAssessmentDetailsChange(
                    "assessmentType",
                    e.target.value
                  )
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Restrictions on Time/Length
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={assessmentDetails.restrictions}
                onChange={(e) =>
                  handleAssessmentDetailsChange("restrictions", e.target.value)
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Individual/Group
            </TableCell>
            <TableCell align="right">
              <Select
                label=""
                size="small"
                fullWidth
                value={assessmentDetails.modeOfSubmission}
                onChange={(e) =>
                  handleAssessmentDetailsChange(
                    "modeOfSubmission",
                    e.target.value
                  )
                }
              >
                <MenuItem value={"Individual"}>Individual</MenuItem>
                <MenuItem value={"Group"}>Group</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Issue Date
            </TableCell>
            <TableCell align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={assessmentDetails.handInDate}
                  onChange={(date) =>
                    handleAssessmentDetailsChange("handInDate", date)
                  }
                />
              </LocalizationProvider>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Hand In Deadline
            </TableCell>
            <TableCell align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Planned Feedback Deadline
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={assessmentDetails.feedbackDeadline}
                onChange={(e) =>
                  handleAssessmentDetailsChange(
                    "feedbackDeadline",
                    e.target.value
                  )
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Mode of Submission
            </TableCell>
            <TableCell align="right">
              <Select fullWidth size="small">
                <MenuItem value={"online"}>Online</MenuItem>
                <MenuItem value={"in-person"}>In person</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Anonymous Marketing
            </TableCell>
            <TableCell align="right">
              <Switch
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: colors.red,
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: colors.red,
                  },
                }}
                checked={assessmentDetails.anonymousMarketing}
                onChange={(e) =>
                  handleAssessmentDetailsChange(
                    "anonymousMarketing",
                    e.target.checked
                  )
                }
              />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Details;
