import React, { useState } from "react";
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

const SignupCard = ({ logo: Logo, shadow: Shadow }) => {
  const [username, setUsername] = useState("");
  const [userValid, setUserValid] = useState("* Required");
  const [email, setEmail] = useState("");
  const [valid, setValidity] = useState("* Required");
  const [passValid, setPassValidity] = useState("* Required");
  const [password, setpassword] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setpassword({ ...password, [prop]: event.target.value });
    if (event.target.value === "") {
      setPassValidity("* Required");
    } else {
      if (validatePassword(password.password)) {
        setPassValidity("* Good to go");
      } else {
        setPassValidity(
          "* Password should contain at least 8 character, 1 upper and lowercase and a digit and symbol"
        );
      }
    }
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

  function validateUsername(user) {
    var re = /^[A-Za-z][A-Za-z0-9_]{3,20}$/;
    return re.test(user);
  }

  function validateEmail(email) {
    var re = /[A-Za-z0-9]+[._]?[a-z0-9]+[@]\w+[-]?\w+[.]\w{2,3}/;
    return re.test(email.toLowerCase());
  }

  function validatePassword(pass) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(pass);
  }

  const validStyleColor = {
    color: "green",
    fontWeight: "bold",
  };

  const invalidStyleColor = {
    color: "red",
  };

  async function signUp() {
    let pass = password["password"];
    let userdetails = { userName: username, email: email, password: pass };

    let result = await fetch(
      `https://xpressotimesheet.herokuapp.com/api/auth/users/`,
      {
        method: "POST",
        body: JSON.stringify(userdetails),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.log("result", result);
    // console.log(userdetails);
  }

  return (
    <Box
      sx={{
        width: "24.5rem",
        height: "fit-content",
        backgroundColor: "white",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "9px",
        overflow: "hidden",
        padding: "50px 28px 26px",
        ...Shadow,
      }}
    >
      <Logo />
      {/* Heading */}
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
      {/* Username */}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          required={true}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);

            if (e.target.value === "") {
              setUserValid("* Required");
            } else {
              if (validateUsername(username)) {
                setUserValid("* Valid Username");
              } else {
                setUserValid("* Invalid Username");
              }
            }
          }}
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />

        <Typography
          sx={{ fontSize: "9px", height: "20px" }}
          style={
            userValid === "* Valid Username"
              ? validStyleColor
              : invalidStyleColor
          }
        >
          {userValid}
        </Typography>
      </Box>
      {/* Email */}
      <Box>
        <TextField
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);

            if (e.target.value === "") {
              setValidity("* Required");
            } else {
              if (validateEmail(email)) {
                setValidity("* Valid Email");
              } else {
                setValidity("* Invalid Email");
              }
            }
          }}
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <Typography
          sx={{ fontSize: "9px", height: "20px" }}
          style={
            valid === "* Valid Email" ? validStyleColor : invalidStyleColor
          }
        >
          {valid}
        </Typography>
      </Box>
      {/* Password */}
      <Box>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required={true}
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
        <Typography
          sx={{ fontSize: "9px", height: "20px" }}
          style={
            passValid === "* Good to go" ? validStyleColor : invalidStyleColor
          }
        >
          {passValid}
        </Typography>
      </Box>
      {/* Checkbox */}
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
          <a className={style.Atag} href="#kl">
            privacy policy & terms
          </a>
        </Typography>
      </Box>
      {/* Sign Up Button */}
      <Button
        onClick={signUp}
        variant="solid"
        sx={{
          width: "100%",
          color: "white",
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
      {/* Sign In Link */}
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
          <a className={style.Atag} style={{ fontSize: "1rem" }} href="#df">
            Sign in instead
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "1rem 0px 1em",
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
      {/* Social Icons */}
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
