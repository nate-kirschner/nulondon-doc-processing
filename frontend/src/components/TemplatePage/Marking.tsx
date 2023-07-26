import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Marking: React.FC = () => {
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
        defaultValue="The University uses two common assessment marking schemes – 
                one for undergraduate and one for postgraduate – to mark all taught programmes leading to
                an award of the University. More detailed information on the common assessment marking scheme 
                and the criteria can be found in the Course Syllabus, available on the University’s VLE."
      />
    </Box>
  );
};

export default Marking;
