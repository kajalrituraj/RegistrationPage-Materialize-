import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Checkbox, Button } from "@mui/material";
import style from "../../styles/signupv1.module.css";
import FB from "../Assets/facebook.svg";
import TW from "../Assets/twitter.svg";
import GH from "../Assets/github.svg";
import GL from "../Assets/google.svg";

const RegisterOne = () => {
  const [email, setEmail] = useState("");
  const [valid, setValidity] = useState("");

  function validateEmail(mail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f7f7f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "37.813rem",
          width: "24.5rem",
          backgroundColor: "white",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "9px",
          overflow: "hidden",
          boxShadow: " rgb(76 78 100 / 22%) 0px 2px 10px 0px",
          justifyContent: "center",
          alignItems: "center",
          padding: "62px 28px 26px",
        }}
      >
        <Box
          sx={{
            height: "1.625rem",
            width: "24.5rem",
            // backgroundColor: "pink",
            margin: "0px 0px 32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "26px", width: "47px", backgroundColor: "blue" }}>
            <Typography></Typography>
          </Box>
          <Box sx={{ height: "24px", width: "132px" }}>
            <Typography
              sx={{
                margin: "0px 0px 0px 0.5rem",
                fontFamily:
                  "Inter, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
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

        <Box
          sx={{
            height: "32px",
            width: "100%",
            margin: "0px 0px  6px",
            lineHeight: "1.334",
          }}
        >
          <Typography
            sx={{
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
              fontWeight: "600",
              margin: "0px 0px 0.375rem",
              fontSize: "1.4993rem",
              fontFamily:
                "Inter, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
            }}
          >
            Adventure starts here 🚀
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "0px 0px 24px 0px",
            fontWeight: "400",
            fontSize: "0.875rem",
            lineHeight: "1.429",
            color: "rgba(76, 78, 100, 0.68)",
          }}
        >
          Make your app management easy and fun!
        </Box>
        {/* <p>Make your app management easy and fun!</p> */}
        <Box
          sx={{
            width: "100%",
            margin: "0px 0px 16px",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </Box>
        <Box>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);

              if (validateEmail(email)) {
                setValidity("Valid Email");
              } else {
                setValidity("Invalid Email");
              }
            }}
            sx={{ width: "100%", padding: "0px 0px 16px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Typography sx={{fontSize:"5px"}}>{valid}</Typography>
        </Box>
        <Box>
          <TextField
            sx={{
              width: "100%",
            }}
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "0px 0px 16px",
          }}
        >
          <Checkbox variant="solid" />

          <Typography sx={{ height: "100%" }}>
            I agree to {'  '}
            <a
              style={{
                textDecoration: "none",
                color: "rgb(38, 198, 249)",
                height: "100%",
              }}
              href="#"
            >
              privacy policy & terms
            </a>
          </Typography>
        </Box>
        <Button
          variant="solid"
          sx={{
            width: "100%",
            color: "white",
            backgroundColor: "rgb(38, 198, 249)",
            "&:hover": {
              backgroundColor: "red",
            },
            padding: "0.5rem 1.625rem",
            margin: "0px 0px 1.75rem",
            cursor: "pointer",
            fontWeight: "500",
            borderRadius: "8px",
            boxShadow: "rgb(76 78 100 / 42%) 0px 4px 8px -4px",
            lineHeight: "1.734",
          }}
        >
          SIGN UP
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>
            Already have an account?<a href="#">Sign in instead</a>
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "1.25rem 0px 1.875rem",
            textAlign: "center",
            // justifyContent:"center",
            alignItems: "center",
            display: "flex",
            height: "24px",
            width: "392px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(76, 78, 100, 0.12)",
              height: "1px",
              width: "45%",
            }}
          ></Box>
          <Box sx={{ width: "10%", height: "100%" }}>or</Box>
          <Box
            sx={{
              backgroundColor: "rgba(76, 78, 100, 0.12)",
              height: "1px",
              width: "45%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            height: "40px",
            width: "392px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className={style.social_container}>
            <img src={FB} alt="" />
          </Box>
          <Box className={style.social_container}>
            <img src={TW} alt="" />
          </Box>
          <Box className={style.social_container}>
            <img src={GH} alt="" />
          </Box>
          <Box className={style.social_container}>
            <img src={GL} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterOne;
