import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import style from "../styles/signupv1.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FB from "./Assets/facebook.svg";
import TW from "./Assets/twitter.svg";
import GH from "./Assets/github.svg";
import GL from "./Assets/google.svg";

const SignupCard = ({logo: Logo, shadow: Shadow}) => {
  const [email, setEmail] = useState("");
  const [valid, setValidity] = useState("");
  const [password, setpassword] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setpassword({ ...password, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setpassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function validateEmail(mail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  return (
    <Box
      sx={{
          width: "24.5rem",
          backgroundColor: "white",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "9px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          padding: "62px 28px 26px",
          ...Shadow,
      }}
    >
      {/* <Box
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
      </Box> */}
      <Logo />

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
            fontSize: "1.3118rem",
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
          letterSpacing: " 0.15px",
          lineHeight: "1.429",
          color: "rgba(76, 78, 100, 0.68)",
        }}
      >
        Make your app management easy and fun!
      </Box>
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
              setValidity("*Valid Email");
            } else {
              setValidity("*Invalid Email");
            }
          }}
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <Typography sx={{ fontSize: "9px", height: "20px" }}>
          {valid}
        </Typography>
      </Box>
      <Box>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={password.showPassword ? "text" : "password"}
            value={password.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0px 0px 16px",
        }}
      >
        <Checkbox variant="solid" />

        <Typography
          sx={{
            height: "100%",
            color: "rgba(76, 78, 100, 0.68)",
            fontWeight: "400",
            fontSize: "0.875rem",
          }}
        >
          I agree to {"  "}
          <a className={style.Atag} href="#">
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
          backgroundColor: "rgb(38, 198, 249)",
          "&:hover": {
            backgroundColor: "#23b7e7",
          },
          padding: "0.5rem 1.625rem",
          margin: "0px 0px 1.75rem",
          cursor: "pointer",
          fontWeight: "400",
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
        <Typography
          sx={{
            color: "rgba(76, 78, 100, 0.68)",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          Already have an account?{" "}
          <a className={style.Atag} style={{ fontSize: "1rem" }} href="#">
            Sign in instead
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "1.25rem 0px 1.875rem",
          textAlign: "center",
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
  );
};

export default SignupCard;
