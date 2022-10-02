import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";

function Accreditation() {
  return (
    <Box>
      <Box style={{ margin: "5rem 12rem" }}>
        <Box>
          <Typography variant="h5">Lorem Ipsum</Typography>
          <Typography variant="body1">
            All on-site personnel must be credentialed. Please use the templates
            below to provide names, ID copies, and job titles for credentials to
            be issued.
          </Typography>
        </Box>
        <Box
          sx={{ mt: 10 }}
          style={{ display: "flex", flexDirection: "row", gap: 30 }}
        >
          <Box
            className="teardown"
            style={{
              width: "50%",
              border: "1px dashed #000",
              margin: 3,
              padding: 14,
            }}
          >
            <Typography variant="body1">
              Build & Teardown Accreditation
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="body2">Download Template</Typography>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <DownloadIcon />
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
          </Box>
          <Box
            className="event days"
            style={{
              width: "50%",
              border: "1px dashed #000",
              margin: 3,
              padding: 14,
            }}
          >
            <Typography variant="body1">Event Days Accreditation</Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="body2">Download Template</Typography>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <DownloadIcon />
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Accreditation;
