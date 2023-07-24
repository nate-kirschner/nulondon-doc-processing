import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { fontFamily, fontSize, fontWeight } from "@mui/system";
import { colors } from "../theme";
import AssessmentRow from "./AssessmentRow";
import AssessmentCriteria from "./AssessmentCriteria";
import LearningOutcomes from "./LearningOutcomes";
import Spacer from "./Spacer";
import SaveButtons from "./SaveButtons";

interface CreateTemplateProps {
  setPage: (page: string) => void;
}

const CreateTemplate: React.FC<CreateTemplateProps> = ({ setPage }) => {
  const courseDummy = {
    title: "Course 1",
    code: "IS3500",
    credits: 4,
    assessments: [
      { title: "Assessment 2", weighting: 50, versions: [1, 2, 3] },
    ],
  };

  return (
    <Box
      sx={{
        width: "90%",
        paddingTop: "32px",
      }}
    >
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: colors.gray }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "20px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  New Version
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <React.Fragment>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Assessment Details
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>Assessment Content</AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Assessment Task
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Task Details
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="Required*"
                          multiline
                          rows={4}
                          defaultValue="This assessment requires..."
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Assessment Criteria
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <AssessmentCriteria />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Marking
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Change default marking criteria as needed:
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="The University uses two common assessment marking schemes - one for 
                                                undergraduate and one for postgraduate - to mark all taught programmes leading to an award of 
                                                the University. More detailed information on the common assessment making scheme and the criteria 
                                                can be found in the Course Syllabus, available on the University's VLE."
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Learning Outcomes
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <LearningOutcomes />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Assessing Feedback
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Change default marking criteria as needed:
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Students can expect to receive feedback on all summative coursework 
                                                within 20 working days of the submission deadline. The 28 calendar day deadline does not apply 
                                                to work submitted late. Feedback can be accessed through the Turnitin assessment link on the course 
                                                page. Further instructions on submitting an assessment and accessing feedback can be found on the University's VLE."
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Late Submissions
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Change default marking criteria as needed:
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Students are reminded to Submit their assessment ahead of the published deadline. However, if assessments are submitted late without approved Extenuating Circumstances, there are penalties:
                                                (1) Up to one day late of the published submission deadline = 5% points deducted from mark. For example, an assessment awarded 58% from the 4
                                                Assessment Brief: Coursework 2022-23 markers, the final mark recorded will be 53%. If the assessment is awarded 42% from the markers, the final mark recorded will be 37%.
                                                (2) Two days late: any mark of 40% or higher will be capped at 40% for undergraduate students. Any mark of 50% or higher will be capped at 50% for postgraduate students. Any mark below 40% for undergraduate students and below 50% for postgraduate students, will stand.
                                                (3) Students who do not submit their assessment within two days, and have no approved extenuating circumstances, are deemed to have failed that assessment element and the mark recorded will be 0%.
                                                For further information, please refer to AQF7 Academic Regulations for Taught Awards in the Academic Handbook."
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Extenuating Circumstances
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Change default marking criteria as needed:
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="The University’s Extenuating Circumstances procedure is in place if there are genuine circumstances that may prevent a student submitting an assessment. 
                                                If the EC application is successful, there will be no academic penalty for missing the published submission deadline. 
                                                Students are reminded that EC covers only short-term issues (within 28 days leading to the submission deadline) and that 
                                                if they experience longer-term matters that impact on learning then they must contact Student Support and Development for advice.
                                                For further information, please refer to the Extenuating Circumstances Policy in the Academic Handbook. "
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Academic Misconduct
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            paddingBottom: "14px",
                          }}
                        >
                          Change default marking criteria as needed:
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Any submission must be a student’s own work and, where facts or ideas have been used from other sources, 
                                                these sources must be appropriately referenced. The Academic Misconduct Policy includes the definitions of 
                                                all practices that will be deemed to constitute academic misconduct. Students should check this policy before 
                                                submitting their work. Students suspected of committing Academic Misconduct will face action under the Policy. 
                                                Where students are found to have committed an offence they will be subject to sanction, which may include failing 
                                                an assessment, failing a course or being dismissed from the University depending upon the severity of the offence committed.
                                                For further information, please refer to the Academic Misconduct Policy in the Academic Handbook."
                        />
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>
                    <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            Version History
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        To be implemented after we figure this out...
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            </TableBody>
          </Table>
        </TableContainer>
        <SaveButtons setPage={setPage} />
      </React.Fragment>
    </Box>
  );
};

export default CreateTemplate;
