import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface AssessingFeedbackProps {
  setAssessingFeedback: (details: string) => void;
}

const AssessingFeedback: React.FC<AssessingFeedbackProps> = ({
  setAssessingFeedback,
}) => {
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
        defaultValue="Students can expect to receive feedback on all summative coursework within 20 
                working days of the submission deadline. The 28 calendar day deadline does not apply to work 
                submitted late. Feedback can be accessed through the Turnitin assessment link on the course page. 
                Further instructions on submitting an assessment and accessing feedback can be found on the University’s VLE."
      />
    </Box>
  );
};

export default AssessingFeedback;
