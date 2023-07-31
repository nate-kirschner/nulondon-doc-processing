import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import Spacer from "../Spacer";

const ApprovalButtons: React.FC = ()=> {
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
          }
        }}
      >
        Back To Home
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
      >
        Confirm Approval Status
      </Button>
    </Box>
  );
};

export default ApprovalButtons;
