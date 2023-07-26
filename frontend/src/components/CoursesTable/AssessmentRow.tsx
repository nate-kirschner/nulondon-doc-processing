import {
  AccordionDetails,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { AssessmentPreview } from "../../types/assessments";
import { colors } from "../../theme";
import { useState } from "react";
import { generateWordDocument } from "../../utils/exportTemplate";

interface AssessmentRowProps extends AssessmentPreview {
  setPage: (page: string) => void;
  courseId: string;
  assessmentId: string;
}

const AssessmentRow: React.FC<AssessmentRowProps> = ({
  id,
  activity,
  versions,
  setPage,
  courseId,
  assessmentId,
}) => {
  const versionToString = (version: number): string => {
    return `v${version}`;
  };

  const [selectedVersion, setSelectedVersion] = useState(
    versionToString(versions[versions.length - 1])
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedVersion(event.target.value);
  };

  return (
    <AccordionDetails
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.2)",
        marginBottom: "16px",
        borderRadius: "4px",
      }}
    >
      <Typography sx={{ fontSize: "16px" }}>{activity}</Typography>
      <Box sx={{ display: "flex", columnGap: "24px" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Version</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedVersion}
            label="Version"
            onChange={handleChange}
          >
            {versions.map((version) => {
              return (
                <MenuItem value={versionToString(version)}>
                  {versionToString(version)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#C8102E4D",
            },
            color: colors.black,
          }}
          color="secondary"
          onClick={() =>
            generateWordDocument(courseId, assessmentId, selectedVersion)
          }
        >
          Export
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#C8102E4D",
            },
            color: colors.black,
          }}
          color="secondary"
          onClick={() => {setPage("Template")}}
        >
          New Version
        </Button>
      </Box>
    </AccordionDetails>
  );
};

export default AssessmentRow;
