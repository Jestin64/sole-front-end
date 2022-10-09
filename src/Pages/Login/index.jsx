import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10rem 20rem 0 20rem",
          gap: 40,
        }}
      > <Box  style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
      }}>
        <TextField id="outlined-basic"  label="Username" variant="standard" />
        <TextField id="outlined-basic" label="Password" variant="standard" />
        </Box>
        <Button
          variant="outlined"
          style={{
            borderColor: "#000",
            backgroundColor:"#bdbdbd",
            borderRadius:0,
            color: "#000",
            width:"300px",
          }}
        >
          Login
        </Button>
        <Button
        href="/registration"
          variant="outlined"
          style={{
            borderColor: "#000",
            borderRadius:0,
            backgroundColor: "#30302f",
            color: "#fff",
            width:"300px",
          }}
        >
          Register
        </Button>
        <Link to="#"><Typography variant="body2">forgot password</Typography></Link>
        
      </Box>
    </div>
  );
}

export default Login;
