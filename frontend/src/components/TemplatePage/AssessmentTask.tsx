import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface AssessmentTaskProps {
  setAssessmentTask: (details: string) => void;
}

const AssessmentTask: React.FC<AssessmentTaskProps> = ({
  setAssessmentTask,
}) => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  useEffect(() => {
    if (textFieldValue === "") {
      return;
    }
    setAssessmentTask(textFieldValue);
  });

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
        onChange={(e) => setTextFieldValue(e.target.value)}
        defaultValue="This assessment requires... You will be assessed on... "
      />
    </Box>
  );
};

export default AssessmentTask;
