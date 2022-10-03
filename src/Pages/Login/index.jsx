import React from "react";
import { TextField, Box, Button } from "@mui/material";

function Login() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5rem auto",
          gap: 40,
        }}
      >
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button
          variant="outlined"
          style={{
            borderColor: "#D9C677",
            color: "#D9C677",
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          style={{
            borderColor: "#000",
            backgroundColor: "#D9C677",
            color: "#000",
          }}
        >
          Register
        </Button>
      </Box>
    </div>
  );
}

export default Login;
