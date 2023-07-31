import { Button } from "@mui/material";
import { colors } from "../../theme";
import { createSearchParams, useNavigate } from "react-router-dom";

interface NVBProps {
  assessmentId: string;
  courseId: string;
}

const NewVersionB: React.FC<NVBProps> = ({ assessmentId, courseId }) => {
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
      onClick={() =>
        navigate({
          pathname: "template",
          search: createSearchParams({
            assessmentId,
            courseId,
          }).toString(),
        })
      }
    >
      New Version
    </Button>
  );
};

export default NewVersionB;
