import React, { useEffect, useState } from "react";
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

const LearningOutcomes: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label =
      event.target.labels?.[0]?.innerText ||
      event.target.getAttribute("label") ||
      "";
    const isChecked = event.target.checked;
    const category = event.target.getAttribute("aria-label");

    // add or remove the checkbox value from the list of checked items
    if (isChecked) {
      setCheckedItems((prevChecked) => [...prevChecked, label]);
    } else {
      setCheckedItems((prevChecked) =>
        prevChecked.filter((item) => item !== label)
      );
    }
  };

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  const getCheckedItemsList = () => {
    return checkedItems;
  };

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
              aria-label="knowledge"
              onChange={handleCheckboxChange}
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
              aria-label="knowledge"
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="p"
        />
        <FormControlLabel
          control={
            <Checkbox
              aria-label="knowledge"
              onChange={handleCheckboxChange}
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
              aria-label="subject"
              data-label="ppp"
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="ppp"
        />
        <FormControlLabel
          control={
            <Checkbox
              aria-label="subject"
              data-label="pppp"
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pppp"
        />
        <FormControlLabel
          control={
            <Checkbox
              aria-label="subject"
              data-label="ppppp"
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="poopoo"
        />
      </FormGroup>
      <Typography sx={{ fontSize: "16px", fontWeight: 700, marginTop: "24px" }}>
        Transferable Skills
      </Typography>
      <FormGroup aria-label="transferable">
        <FormControlLabel
          control={
            <Checkbox
              aria-label="knowledge"
              data-label="pppppp"
              onChange={handleCheckboxChange}
              sx={{
                "&.Mui-checked": { color: colors.red },
              }}
            />
          }
          label="pppppp"
        />
      </FormGroup>
    </Box>
  );
};

export default LearningOutcomes;
