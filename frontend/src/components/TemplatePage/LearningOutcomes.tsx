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
import { NewVersion } from "../../types/newVersion";
import { useEffect, useState } from "react";
import _ from "lodash";

interface LearningOutcomesProps {
  newVersion: NewVersion | undefined;
  setLearningOutcomes: (details: LearningOutcomeSections) => void;
}

type LearningOutcomeWithStatus = {
  checked: boolean;
} & LearningOutcome;

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({
  newVersion,
  setLearningOutcomes,
}) => {
  const initialState = (initialList: LearningOutcome[] | undefined) => {
    if (initialList === undefined) {
      return [];
    }
    const listWithChecked = initialList.map((outcome) => {
      return {
        ...outcome,
        checked: false,
      };
    });

    return listWithChecked;
  };

  const [knowledge, setKnowledge] = useState<LearningOutcomeWithStatus[]>([]);
  const [subject, setSubject] = useState<LearningOutcomeWithStatus[]>([]);
  const [transferable, setTransferable] = useState<LearningOutcomeWithStatus[]>(
    []
  );

  useEffect(() => {
    setKnowledge(initialState(newVersion?.learning_outcomes.knowledge));
  }, [newVersion?.learning_outcomes.knowledge]);

  useEffect(() => {
    setSubject(initialState(newVersion?.learning_outcomes.subject));
  }, [newVersion?.learning_outcomes.subject]);

  useEffect(() => {
    setTransferable(initialState(newVersion?.learning_outcomes.transferable));
  }, [newVersion?.learning_outcomes.transferable]);

  useEffect(() => {
    setLearningOutcomes({
      knowledge: knowledge.filter((outcome) => outcome.checked === true),
      subject: subject.filter((outcome) => outcome.checked === true),
      transferable: transferable.filter((outcome) => outcome.checked === true),
    });
  }, [knowledge, subject, transferable]);

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
        {knowledge.map((learning_outcome) => {
          return (
            <LearningOutcomesCheckbox
              outcomesList={knowledge}
              learningOutcome={learning_outcome}
              setOutcomesList={setKnowledge}
            />
          );
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Subject-Specific Skills
      </Typography>
      <FormGroup>
        {subject.map((learning_outcome) => {
          return (
            <LearningOutcomesCheckbox
              outcomesList={subject}
              learningOutcome={learning_outcome}
              setOutcomesList={setSubject}
            />
          );
        })}
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Transferable Skills
      </Typography>
      <FormGroup>
        {transferable.map((learning_outcome) => {
          return (
            <LearningOutcomesCheckbox
              outcomesList={transferable}
              learningOutcome={learning_outcome}
              setOutcomesList={setTransferable}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

interface LearningOutcomesCheckbox {
  outcomesList: LearningOutcomeWithStatus[];
  learningOutcome: LearningOutcomeWithStatus;
  setOutcomesList: (newList: LearningOutcomeWithStatus[]) => void;
}

const LearningOutcomesCheckbox: React.FC<LearningOutcomesCheckbox> = ({
  outcomesList,
  learningOutcome,
  setOutcomesList,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(e) => {
            const tempKnowledge = outcomesList.map((outcome) => {
              return {
                ...outcome,
                checked:
                  outcome.code === learningOutcome.code
                    ? e.target.checked
                    : outcome.checked,
              };
            });
            setOutcomesList(tempKnowledge);
          }}
          sx={{
            "&.Mui-checked": { color: colors.red },
          }}
        />
      }
      label={learningOutcome.code + ": " + learningOutcome.text_desc}
    />
  );
};

export default LearningOutcomes;
