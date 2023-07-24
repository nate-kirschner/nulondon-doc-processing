import { Box, TextField, Typography } from "@mui/material";

const AssessingFeedback: React.FC = () => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "15px", fontWeight: 700, paddingBottom: "14px" }}
      >
        Change default marking criteria as needed:
      </Typography>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        multiline
        rows={4}
        defaultValue="The University’s Extenuating Circumstances procedure is in place if there are genuine 
                circumstances that may prevent a student submitting an assessment. If the EC application is successful, 
                there will be no academic penalty for missing the published submission deadline. Students are reminded 
                that EC covers only short-term issues (within 28 days leading to the submission deadline) and that if 
                they experience longer-term matters that impact on learning then they must contact Student Support and 
                Development for advice. For further information, please refer to the Extenuating Circumstances Policy in the Academic Handbook."
      />
    </Box>
  );
};

export default AssessingFeedback;
