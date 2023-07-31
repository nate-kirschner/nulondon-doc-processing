import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface LateSubmissionProps {
  setLateSubmission: (details: string) => void;
}

const AssessingFeedback: React.FC<LateSubmissionProps> = ({
  setLateSubmission,
}) => {
  const [textFieldValue, setTextFieldValue] = useState<string>(defaultText);

  useEffect(() => {
    if (textFieldValue === "") {
      return;
    }
    setLateSubmission(textFieldValue);
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

export default AssessingFeedback;

const defaultText =
  "Students Are Reminded to: Submit their assessment ahead of the published deadline. However, if assessments are submitted late without approved Extenuating Circumstances, there are penalties: Up to one day late of the published submission deadline = 5% points deducted from mark. For example, an assessment awarded 58% from the final mark recorded will be 53%. If the assessment is awarded 42% from the markers, the final mark recorded will be 37%. Two days late: any mark of 40% or higher will be capped at 40% for undergraduate students. Any mark of 50% or higher will be capped at 50% for postgraduate students. Any mark below 40% for undergraduate students and below 50% for postgraduate students, will stand. Students who do not submit their assessment within two days, and have no approved extenuating circumstances, are deemed to have failed that assessment element and the mark recorded will be 0%. For further information, please refer to AQF7 Academic Regulations for Taught Awards in the Academic Handbook.";
