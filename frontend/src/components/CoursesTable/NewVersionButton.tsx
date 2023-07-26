import { Button } from "@mui/material";
import { colors } from "../../theme";
import { createSearchParams, useNavigate } from "react-router-dom";

interface NVBProps {
    assessmentID: string
}

const NewVersionB: React.FC<NVBProps> = ({
    assessmentID,
}) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "#C8102E4D",
        },
        color: colors.black,
      }}
      color="secondary"
      onClick={() => navigate({
        pathname: "template", 
        search: createSearchParams({ 
            assessmentID
        }).toString()})}
    >
      New Version
    </Button>
  );
};

export default NewVersionB;
