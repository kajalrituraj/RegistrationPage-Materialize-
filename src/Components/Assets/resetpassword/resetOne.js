import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SignupCard from "../../signupCard";

const ResetOne = () => {
  const logo = () => {
    return <Box></Box>;
  };
  const shadow = {
    // height: "100vh",
    borderRadius: "none",
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          // backgroundColor: "cyan",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "calc(100vw - 450px)",
            height: "100vh",
            backgroundColor: "#f7f7f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* <Box sx={{ backgroundColor: "blue" }}>
            {" "}
            <SignupCard logo={logo} shadow={shadow}></SignupCard>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default ResetOne;
