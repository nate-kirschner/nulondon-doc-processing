import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AssessmentTask: React.FC = () => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setTextFieldValue(newValue);
    console.log(newValue);
  };

  const saveTemplate = () => {
    return textFieldValue;
  };

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
        onChange={handleTextFieldChange}
        defaultValue=""
      />
    </Box>
  );
};

export default AssessmentTask;
