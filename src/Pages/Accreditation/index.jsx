import React from "react";
import { Box, Typography, IconButton , Button} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";

function Accreditation() {
  return (
    <Box>
      <Box style={{ padding: "2rem 8rem"  }}>
        <Box>
          <Typography variant="h6">Lorem Ipsum</Typography>
          <Typography variant="body1">
            All on-site personnel must be credentialed. Please use the templates
            below to provide names, ID copies, and job titles for credentials to
            be issued.
          </Typography>
        </Box>
        <Box
          sx={{ mt: 6 }}
          style={{ display: "flex", flexDirection: "column", gap: 60 }}
        >
          <Box
            className="event days"
            style={{
              width: "50%",
              border: "1px dashed #000",
              margin: 3,
              padding: 14,
              display:"flex",
              gap:15,
              flexDirection: "column",
            }}
          >
            <Typography variant="body1">Build & Teardown Accreditation</Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
               <Button
                style={{color:"#000", borderColor:"#000" , borderRadius:0}}
                variant="outlined"
                aria-label="Download Template"
                component="label"
              >
                <Typography variant="body2">Download Template</Typography>
                <DownloadIcon />
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              
              <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="upload file"
                component="label"
              >
                <Typography variant="body2">Upload File</Typography>
                <input hidden accept="image/*" type="file" />
                <FileUploadIcon />
              </Button>
            </Box>
          </Box>
          <Box
            className="event days"
            style={{
              width: "50%",
              border: "1px dashed #000",
              margin: 3,
              padding: 14,
              display:"flex",
              gap:15,
              flexDirection: "column",
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
               <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="Download Template"
                component="label"
              >
                <Typography variant="body2">Download Template</Typography>
                <DownloadIcon />
              </Button>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              
              <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="upload file"
                component="label"
              >
                <Typography variant="body2">Upload File</Typography>
                <input hidden accept="image/*" type="file" />
                <FileUploadIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Accreditation;
