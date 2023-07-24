import { Box, Button, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../theme";

const assessment = { title: "Assessment 1", weighting: 20, versions: [1] };

interface TempPageProps {
    setPage: (page:string) => void;
}

const TempPage: React.FC<TempPageProps> = ({
    setPage,
}) => {
  return (
    <div>
        <Box sx={{paddingTop: "25px"}}>
            <Button
                sx={{
                    "&:hover": {
                        backgroundColor: "#C8102E4D",
                    },
                    color: colors.black,
                }}
                onClick={() => setPage('Browse Courses')}
            >
                Cancel 
            </Button>
            <Button
                sx={{
                    "&:hover": {
                        backgroundColor: "#C8102E4D",
                    },
                    color: colors.black,
                }}
                onClick={() => setPage('Browse Courses')}
            >
                Save Version 
            </Button>
        </Box>
    </div>
  )
};

export default TempPage;