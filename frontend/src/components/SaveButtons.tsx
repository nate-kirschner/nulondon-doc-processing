// SaveButtons.tsx is used to add the 'Save Version' and 'Cancel' buttons to the CreateTemplate.tsx file

import { Box, Button } from "@mui/material";
import { colors } from "../theme";
import Spacer from "./Spacer";
import { useNavigate } from "react-router-dom";

interface SaveButtonsProps {
  handleSave: () => void; // Add a prop for the handler function to save all data
}

const SaveButtons: React.FC<SaveButtonsProps> = ({ handleSave }) => {
  const navigate = useNavigate();
  return (
    <Box style={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
        onClick={() => {
          navigate("/");
        }}
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
        onClick={handleSave}
      >
        Save Version
      </Button>
    </Box>
  );
};

export default SaveButtons;
