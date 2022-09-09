import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SignupCard from "../signupCard";
import MT from "../Assets/materialize.svg";
import IMG from "../Assets/registerv-2Illustration.png";

const Registertwo = () => {
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
        backgroundColor: "cyan",
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
        <Box>
          <Box
            sx={{
              height: "1.625rem",
              width: "24.5rem",
              margin: "0px 0px 32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ><Box sx={{ height: "26px", width: "47px",}}>
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
          <img src={IMG} alt="" height="659px" width="768px"></img>
        </Box>
      </Box>
      <Box
        sx={{
          float: "right",
          right: 0,
          width: "450px",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SignupCard logo={logo} shadow={shadow}></SignupCard>
      </Box>
    </Box>
    </>
  );
};

export default Registertwo;
