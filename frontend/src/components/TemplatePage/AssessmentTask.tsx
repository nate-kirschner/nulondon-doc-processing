import { Box, TextField, Typography } from "@mui/material";

const AssessmentTask: React.FC = () => {
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
        defaultValue=""
      />
    </Box>
  );
};

export default AssessmentTask;