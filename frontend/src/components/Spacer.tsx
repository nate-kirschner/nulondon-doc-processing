import { Box } from "@mui/material";

interface SpacerProps {
  width?: string | string[];
  height?: string | string[];
}

const Spacer: React.FC<SpacerProps> = ({ width = "0px", height = "0px" }) => {
  return <Box sx={{ paddingLeft: width, paddingTop: height }} />;
};

export default Spacer;
