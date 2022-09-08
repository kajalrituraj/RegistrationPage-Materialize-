import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SignupCard from "../signupCard";
import MT from "../Assets/materialize.svg";


const Registertwo = () => {
  
  const logo = () => {
    return (
      <Box>
      </Box>
    );
  };

  const shadow = {
    height: "100vh",
    borderRadius: "none",
  };

  return (
    <Box
      sx={{
        height: "51.563rem",
        width: "100vw",
        backgroundColor: "cyan",
      }}
    >
      <SignupCard logo={logo} shadow={shadow}></SignupCard>

      {/* <Box
        sx={{ height: "100%", width: "66.875rem", backgroundColor: "yellow" }}
      >
      </Box> */}
    </Box>
  );
};

export default Registertwo;
