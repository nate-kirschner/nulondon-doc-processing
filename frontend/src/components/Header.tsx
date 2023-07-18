import React from "react";
import { Box, Button } from "@mui/material";
import { colors } from "../theme";
import Spacer from "./Spacer";

const Header: React.FC = () => {
  const onLoginClick = () => {
    alert("Fuck off, we haven't implemented this yet");
  };

  return (
    <Box sx={{ backgroundColor: colors.black }}>
      <Spacer height={"24px"} />
      <Box
        sx={{
          paddingX: [3, 5, 10],
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://www.nulondon.ac.uk/wp-content/themes/new-college-of-the-humanities/assets/images/logo-northeastern-uni-london-nch.svg"
          alt="Northeastern University London"
        />
        <Button
          variant="text"
          sx={{ color: colors.white }}
          onClick={onLoginClick}
        >
          Log In
        </Button>
      </Box>
      <Spacer height={"24px"} />
    </Box>
  );
};

export default Header;
