import React from "react";
import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15rem 0",
      }}
    >
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        404 Error : Page Not Found
      </Typography>
    </Box>
  );
}

export default NotFound;
