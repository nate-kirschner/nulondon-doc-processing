import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";

interface MarkingProps {
  setMarking: (details: string) => void;
}

const Marking: React.FC<MarkingProps> = ({ setMarking }) => {
  const [textFieldValue, setTextFieldValue] = useState<string>(defaultText);

  useEffect(() => {
    if (textFieldValue === "") {
      return;
    }
    setMarking(textFieldValue);
  }, [textFieldValue]);

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
        value={textFieldValue}
      />
    </Box>
  );
};

export default Marking;

const defaultText =
  "The University uses two common assessment marking schemes – one for undergraduate and one for postgraduate – to mark all taught programmes leading to an award of the University. More detailed information on the common assessment marking scheme and the criteria can be found in the Course Syllabus, available on the University’s VLE.";
