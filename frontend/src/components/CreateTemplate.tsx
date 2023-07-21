import React from 'react';
import { Box, Input, Typography } from "@mui/material";
import { fontFamily, fontSize, fontWeight } from '@mui/system';


const CreateTemplate: React.FC = () => {
    return(
        <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
            >
            <Typography
                textAlign="left"
                sx={{ 
                    paddingY: "40px",
                    fontSize: "24px",
                    fontFamily: "lato",
                    marginLeft: "80px",
                    fontWeight: 700
                 }}>
                New Version
            </Typography>
        </Box>
    );
};

export default CreateTemplate;