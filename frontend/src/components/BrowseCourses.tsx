import React from "react";
import { Box, Flex, Heading, Input } from "theme-ui";

const BrowseCourses: React.FC = () => {
  return (
    <Flex
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <Heading as="h1" sx={{ fontSize: 24 }}>
        Hello World
      </Heading>
    </Flex>
  );
};

export default BrowseCourses;
