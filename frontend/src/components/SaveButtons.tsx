// SaveButtons.tsx is used to add the 'Save Version' and 'Cancel' buttons to the CreateTemplate.tsx file

import { Button } from "@mui/material";
import { colors } from "../theme";
import Spacer from "./Spacer";

interface SaveButtonsProps {
  setPage: (page: string) => void;
}

const SaveButtons: React.FC<SaveButtonsProps> = ({ setPage }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Button
        sx={{
          color: colors.white,
          backgroundColor: colors.red,
          height: "max-content",
          padding: "12px",
          marginTop: "30px",
          marginBottom: "30px",

          "&:hover": {
            backgroundColor: colors.red,
            opacity: 0.8,
          },
        }}
        onClick={() => setPage("Browse Courses")}
      >
        Cancel
      </Button>
      <Spacer width={"24px"} />
      <Button
        sx={{
          color: colors.white,
          backgroundColor: colors.red,
          height: "max-content",
          padding: "12px",
          marginTop: "30px",
          marginBottom: "30px",
          "&:hover": {
            backgroundColor: colors.red,
            opacity: 0.8,
          },
        }}
        onClick={() => setPage("Browse Courses")}
      >
        Save Version
      </Button>
    </div>
  );
};

export default SaveButtons;
