import React from 'react';
import { Box, Input, Typography } from "@mui/material";
import { fontFamily, fontSize, fontWeight } from '@mui/system';


const CreateTemplate: React.FC = () => {
    const courseDummy = {
        title: "Course 1",
        code: "IS3500",
        credits: 4,
        assessments: [{ title: "Assessment 2", weighting: 50, versions: [1, 2, 3] }]
    };

    return(
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
                Course Title: {courseDummy.title}<br/>
                Assessment: {courseDummy.assessments[0].title}<br/>
                Course Code: {courseDummy.code}<br/>
                Version: {courseDummy.assessments[0].versions[2]}
            </Typography>
        </Box>
    );
};

export default CreateTemplate;