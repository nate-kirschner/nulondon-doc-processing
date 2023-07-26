import React, { useState } from "react";
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
import { NewVersion } from "../../types/newVersion";

interface LearningOutcomesProps {
  newVersion: NewVersion | undefined;
}

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({newVersion}) => {
  if(!newVersion) {
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
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="Requirement 1 when we figure out the data stuff"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pp"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pp"
        />
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Subject-Specific Skills
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pp"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pp"
        />
        <FormControlLabel control={<Checkbox />} label="poopoo" />
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Transferable Skills
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pp"
        />
      </FormGroup>
    </Box>
  );
};

export default LearningOutcomes;
