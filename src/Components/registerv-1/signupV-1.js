import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MT from "../Assets/materialize.svg";
import SignupCard from "../signupCard";
import Background from "../Assets/Back-illustration.png";

const RegisterOne = () => {
  const logo = () => {
    return (
      <Box
        sx={{
          height: "1.625rem",
          width: "24.5rem",
          margin: "0px 0px 32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "26px", width: "47px" }}>
          {" "}
          <img src={MT} alt="" />
        </Box>
        <Box sx={{ height: "24px", width: "132px" }}>
          <Typography
            sx={{
              margin: "0px 0px 0px 0.5rem",
              letterSpacing: "0.15px",
              color: " rgba(76, 78, 100, 0.87)",
              lineHeight: "1",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
          >
            Materialize
          </Typography>
        </Box>
      </Box>
    );
  };

  const shadow = {
    height: "37.813rem",
    boxShadow: " rgb(76 78 100 / 22%) 0px 2px 10px 0px",
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f7f7f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        
      }}
    ><img src= {Background}alt="" height="310px"width="1536px" float="bottom"
      />
      <SignupCard logo={logo} shadow={shadow}></SignupCard>
    </Box>
  );
};

export default RegisterOne;
