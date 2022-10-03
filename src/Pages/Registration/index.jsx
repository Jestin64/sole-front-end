import React from "react";
import { Box, TextField, IconButton, Typography, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function Registration() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
      sx={{ m: 6 }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "20%",
        }}
        sx={{ m: 6 }}
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Mobile" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Company/Brand"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Industry" variant="outlined" />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 67,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Upload File</Typography>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <FileUploadIcon />
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Upload File</Typography>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <FileUploadIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          style={{ color: "gold", backgroundColor: "black" }}
          fullWidth
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Registration;
