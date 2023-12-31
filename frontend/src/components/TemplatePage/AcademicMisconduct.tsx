import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface AcademicMinsconductProps {
  setAcademicMisconduct: (details: string) => void;
}

const AcademicMisconduct: React.FC<AcademicMinsconductProps> = ({
  setAcademicMisconduct,
}) => {
  const [textFieldValue, setTextFieldValue] = useState<string>(defaultText);

  useEffect(() => {
    if (textFieldValue === "") {
      return;
    }
    setAcademicMisconduct(textFieldValue);
  }, [textFieldValue]);

  return (
    <div>
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
    </div>
  );
};

export default AcademicMisconduct;

const defaultText =
  "Any submission must be a student’s own work and, where facts or ideas have been used from other sources, these sources must be appropriately referenced. The Academic Misconduct Policy includes the definitions of all practices that will be deemed to constitute academic misconduct. Students should check this policy before submitting their work. Students suspected of committing Academic Misconduct will face action under the Policy. Where students are found to have committed an offence they will be subject to sanction, which may include failing an assessment, failing a course or being dismissed from the University depending upon the severity of the offence committed. For further information, please refer to the Academic Misconduct Policy in the Academic Handbook.";
