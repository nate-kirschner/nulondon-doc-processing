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
import { AssessmentPreview, Version } from "../../types/assessments";
import { colors } from "../../theme";
import { useEffect, useState } from "react";
import NewVersionB from "./NewVersionButton";

import { generateWordDocument } from "../../utils/export/exportTemplate";

interface AssessmentRowProps extends AssessmentPreview {
  courseId: string;
  assessmentId: string;
  versions: Version[];
}

const AssessmentRow: React.FC<AssessmentRowProps> = ({
  id,
  activity,
  versions,
  courseId,
  assessmentId,
}) => {
  const [selectedVersion, setSelectedVersion] = useState<Version | undefined>(
    versions[versions.length - 1]
  );

  const versionToString = (version: Version): string => {
    return `v${version.version}`;
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedVersion(
      versions.find(
        (version) => event.target.value === versionToString(version)
      )
    );
  };

  const statusColor = (() => {
    switch (selectedVersion?.status) {
      case "APPROVED":
        return "green";
      case "PENDING":
        return "#FDDA0D";
      case "REJECTED":
        return "red";
    }
  })();

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
        {selectedVersion && (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  height: "max-content",
                  border: `2px solid ${statusColor}`,
                  borderRadius: "15px",
                  padding: "2px 5px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    color: statusColor,
                  }}
                >
                  {selectedVersion.status}
                </Typography>
              </Box>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Version</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={versionToString(selectedVersion)}
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
                generateWordDocument(
                  courseId,
                  assessmentId,
                  versionToString(selectedVersion)
                )
              }
            >
              Export
            </Button>
          </>
        )}
        <NewVersionB assessmentId={id} courseId={courseId} />
      </Box>
    </AccordionDetails>
  );
};

export default AssessmentRow;
