import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Register2 = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "cyan",
        display:"flex",justifyContent:"center",alignItems:"center",
      }}
    >
      <Box
        sx={{ height: "80vh", width: "80vw", backgroundColor: "yellow",position:"absolute",display:"flex",justifyContent:"left",alignItems:"center",borderRadius:"9px",
       
    }}
      >
        <Box sx={{ height: "90vh", width: "40vw",borderRadius:"9px", backgroundColor: "black",position:"absolute",marginLeft:"5%", }}></Box>
      </Box>
    </Box>
  );
};

export default Register2;
