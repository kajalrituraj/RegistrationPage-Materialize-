import React from "react";
import { Box, Typography } from "@mui/material";
import SignupCard from "../signupCard";
import MT from "../Assets/materialize.svg";
import BackImg from "../Assets/image-asset.jpg";

const Register2 = () => {
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
    top: 0,
    right: 0,
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url(${BackImg})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundOpacity: "0.1",
      }}
    >
      <Box
        sx={{
          height: "75vh",
          width: "75vw",
          backgroundColor: "transparent",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          borderRadius: "9px",
          boxShadow: "rgb(76 78 100 / 42%) 0px 4px 813px -4px",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            borderRadius: "9px",
            backgroundColor: "black",
            position: "absolute",
            marginLeft: "50%",
            width: "24.5rem",
            padding: "62px 28px 26px",
          }}
        >
          <SignupCard logo={logo} shadow={shadow}></SignupCard>
        </Box>
      </Box>
    </Box>
  );
};

export default Register2;
