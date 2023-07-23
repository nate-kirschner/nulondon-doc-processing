import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { fontFamily, fontSize, fontWeight } from '@mui/system';
import { colors } from '../theme';
import AssessmentRow from './AssessmentRow';
import AssessmentCriteria from './AssessmentCriteria';


const CreateTemplate: React.FC = () => {
    const courseDummy = {
        title: "Course 1",
        code: "IS3500",
        credits: 4,
        assessments: [{ title: "Assessment 2", weighting: 50, versions: [1, 2, 3] }]
    };

    return (
        <Box
            sx={{
                width: "90%",
                paddingTop: "32px"
            }}>
            <React.Fragment
            >
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: colors.gray }}>
                                <TableCell
                                    sx={{ paddingX: "24px", fontSize: "20px", fontWeight: 700 }}
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
                                            <AccordionDetails>
                                                Assessment Content
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
                                                        Assessment Task
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography sx={{ fontSize: "15px", fontWeight: 700, paddingBottom: "14px"}}>
                                                        Task Details
                                                    </Typography> 
                                                <TextField fullWidth 
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
                                            <Typography sx={{ fontSize: "12px" }}>
                                                        Change default marking criteria as needed:
                                                    </Typography>
                                            <TextField fullWidth 
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={4}
                                                defaultValue="The University uses two common assessment marking schemes - one for 
                                                undergraduate and one for postgraduate - to mark all taught programmes leading to an award of 
                                                the University. 
                                                
                                                More detailed information on the common assessment making scheme and the criteria 
                                                can be found in the Course Syllabus, available on the University's VLE"
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
                                                LO Content
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
                                                Feedback Details
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
                                                Submissions Content
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
                                                Content
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
                                                Content
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
                                                History Details
                                            </AccordionDetails>
                                        </Accordion>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        </Box>
    );
};

export default CreateTemplate;