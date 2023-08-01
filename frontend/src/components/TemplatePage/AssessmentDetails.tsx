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
import { NewVersion } from "../../types/newVersion";
import React, { useEffect, useState } from "react";
import {
  AssessmentDetails,
  GroupType,
  ModeOfSubmission,
} from "../../types/template";

interface AssessmentDetailsProps {
  newVersion: NewVersion | undefined;
  setAssessmentDetails: (details: AssessmentDetails) => void;
}

const AssessmentDetailsComponent: React.FC<AssessmentDetailsProps> = ({
  newVersion,
  setAssessmentDetails,
}) => {
  const displayCourse = [
    { displayName: "Course Title", displayValue: newVersion?.title },
    { displayName: "Course Code", displayValue: newVersion?.code },
    { displayName: "FHEQ", displayValue: "Level 4" },
    {
      displayName: "Assessment Activity",
      displayValue: newVersion?.activity,
    },
    { displayName: "Assessment Number", displayValue: "AE" + newVersion?.ae },
    {
      displayName: "Assessment Weighting",
      displayValue: newVersion?.weight + " %",
    },
  ];

  const [courseLeader, setCourseLeader] = useState("");
  const [sitting, setSitting] = useState("");
  const [assessmentType, setAssessmentType] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [groupType, setGroupType] = useState<GroupType | undefined>();
  const [issueDate, setIssueDate] = useState<Date | null>(null);
  const [handInDeadline, setHandInDeadline] = useState<Date | null>(null);
  const [feedbackDeadline, setFeedbackDeadline] = useState("");
  const [modeOfSubmission, setModeOfSubmission] = useState<
    ModeOfSubmission | undefined
  >();
  const [anonymousMarketing, setAnonymousMarketing] = useState<boolean>(false);

  useEffect(() => {
    if (
      courseLeader === "" ||
      sitting === "" ||
      assessmentType === "" ||
      restrictions === "" ||
      groupType === undefined ||
      issueDate === null ||
      handInDeadline === null ||
      feedbackDeadline === "" ||
      modeOfSubmission === undefined ||
      newVersion === undefined
    ) {
      return;
    }
    const updatedDetails: AssessmentDetails = {
      courseTitle: newVersion.title,
      courseLeader,
      sitting,
      assessmentType,
      restrictions,
      groupType,
      issueDate: issueDate.toJSON(),
      handInDate: handInDeadline.toJSON(),
      feedbackDeadline,
      modeOfSubmission,
      courseCode: newVersion.code,
      FHEQ: newVersion.fheq,
      assessmentTitle: newVersion.activity,
      assessmentNumber: newVersion.ae,
      weighting: newVersion.weight.toString(),
      anonymousMarketing,
    };
    setAssessmentDetails(updatedDetails);
  }, [
    courseLeader,
    sitting,
    assessmentType,
    restrictions,
    groupType,
    issueDate,
    handInDeadline,
    feedbackDeadline,
    modeOfSubmission,
    anonymousMarketing,
  ]);

  if (!newVersion) {
    return null;
  }

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
                onChange={(e) => setCourseLeader(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Sitting
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setSitting(e.target.value)}
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
                onChange={(e) => setAssessmentType(e.target.value)}
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
                onChange={(e) => setRestrictions(e.target.value)}
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
                onChange={(e) =>
                  setGroupType(
                    e.target.value === "Individual" ? "Individual" : "Group"
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
                  value={issueDate}
                  onChange={(value) => setIssueDate(value)}
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
                <DatePicker
                  value={handInDeadline}
                  onChange={(value) => setHandInDeadline(value)}
                />
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
                onChange={(e) => setFeedbackDeadline(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Mode of Submission
            </TableCell>
            <TableCell align="right">
              <Select
                fullWidth
                size="small"
                onChange={(e) =>
                  setModeOfSubmission(
                    e.target.value === "Online" ? "Online" : "InPerson"
                  )
                }
              >
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
                onChange={(e) => setAnonymousMarketing(e.target.checked)}
              />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default AssessmentDetailsComponent;
