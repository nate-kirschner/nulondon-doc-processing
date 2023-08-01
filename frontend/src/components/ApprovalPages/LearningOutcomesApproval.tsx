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
import LearningOutcome, {
  LearningOutcomeSections,
} from "../../types/learningOutcome";

interface LearningOutcomesAppProps {
  learningObjectives: LearningOutcomeSections | undefined;
}

const LearningOutcomesApproval: React.FC<LearningOutcomesAppProps> = ({
  learningObjectives,
}) => {
  function isType(learning_outcome: LearningOutcome) {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            sx={{
              "&.Mui-checked": { color: colors.red },
            }}
          />
        }
        label={learning_outcome.code + ": " + learning_outcome.text_desc}
      />
    );
  }

  if (!learningObjectives) {
    return null;
  }

  return (
    <Box>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Knowledge and Understanding
      </Typography>
      <FormGroup>
        {learningObjectives.knowledge.map((entry) => {
          return (
            isType(entry)
          )
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Subject-Specific Skills
      </Typography>
      <FormGroup>
        {learningObjectives.subject.map((entry) => {
          return (
            isType(entry)
          )
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Transferable Skills
      </Typography>
      <FormGroup>
        {learningObjectives.transferable.map((entry) => {
          return (
            isType(entry)
          )
        })}
      </FormGroup>
    </Box>
  );
};

export default LearningOutcomesApproval;
