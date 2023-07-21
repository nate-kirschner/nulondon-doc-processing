import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from "@mui/material";
import { fontFamily, fontSize, fontWeight } from '@mui/system';


const CreateTemplate: React.FC = () => {
    const courseDummy = {
        title: "Course 1",
        code: "IS3500",
        credits: 4,
        assessments: [{ title: "Assessment 2", weighting: 50, versions: [1, 2, 3] }]
    };

    return(
        <React.Fragment>
      <TableContainer component={Paper} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.grey }}>
              <TableCell
                sx={{ paddingX: "24px", fontSize: "20px", fontWeight: 700 }}
              >
                New Assessment Version
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableCell
                sx={{ paddingX: "24px", fontSize: "20px", fontWeight: 700 }}
              >
                <Accordion>
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                        </Box>
                      </AccordionSummary>
                    </Accordion>
              </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
    )
}



/*
        <Box
        sx={{
            width: "80%"
          }}
            >
            <Typography
                textAlign="left"
                sx={{ 
                    paddingTop: "40px",
                    fontSize: "24px",
                    fontFamily: "lato",
                    fontWeight: 700
                 }}>
                New Version
            </Typography>
            <Typography
                textAlign="left"
                sx={{ 
                    paddingY: "20px",
                    fontSize: "18px",
                    fontFamily: "lato",
                 }}>
                Assessment Details <br/>
                Course Title: {courseDummy.title}<br/>
                Assessment: {courseDummy.assessments[0].title}<br/>
                Course Code: {courseDummy.code}<br/>
                Version: {courseDummy.assessments[0].versions[2]}
            </Typography>
            <FormGroup>
                <Typography
                    textAlign="left"
                    sx={{ 
                    paddingY: "20px",
                    fontSize: "18px",
                    fontFamily: "lato",
                 }}>
                    Learning Objectives
                </Typography>
                <FormControlLabel control={<Checkbox defaultChecked />} label="LO1" />
                <FormControlLabel control={<Checkbox />} label="LO2" />
                <FormControlLabel control={<Checkbox />} label="LO3" />
            </FormGroup>
        </Box>
    );
};*/

export default CreateTemplate;