import React from "react";
import { Box, Button } from "@mui/material";
import { colors } from "../theme";
import Spacer from "./Spacer";

const Header: React.FC = () => {
  const onLoginClick = () => {
    alert("Fuck off, we haven't implemented this yet");
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Spacer height={"24px"} />
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: [3, 5, 10],
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
      </Box>

      <Spacer height={"24px"} />
    </Box>
  );
};

export default Header;
