import {
  TextField,
  Button,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { colors } from "../../theme";
import LearningOutcome from "../../types/learningOutcome";
import { NewVersion } from "../../types/newVersion";

interface LearningOutcomesProps {
  newVersion: NewVersion | undefined;
}

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ newVersion }) => {
  function isType(learning_outcome: LearningOutcome, key: string) {
    if (learning_outcome.code.startsWith(key)) {
      return (
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label={learning_outcome.code + ": " + learning_outcome.text_desc}
        />
      );
    }
  }
  if (!newVersion) {
    return null;
  }
  return (
    <Box>
      <Typography sx={{ fontSize: "16px" }}>
        Select the following components that this assessment will cover:
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Knowledge and Understanding
      </Typography>
      <FormGroup>
        {newVersion.learning_outcomes.map((learning_outcome) => {
          return isType(learning_outcome, "K");
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Subject-Specific Skills
      </Typography>
      <FormGroup>
        {newVersion.learning_outcomes.map((learning_outcome) => {
          return isType(learning_outcome, "S");
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Transferable Skills
      </Typography>
      <FormGroup>
        {newVersion.learning_outcomes.map((learning_outcome) => {
          return isType(learning_outcome, "T");
        })}
      </FormGroup>
    </Box>
  );
};

export default LearningOutcomes;
