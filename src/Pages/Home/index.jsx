import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccordionTable from "../../Components/AccordionTable";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  const table = [
    {
      title: "Festival Operating Hours",
      rows: [
        ["December 09", "Preview | By invitation only" , "15:00 – 17:00"],
        ["December 09", "Doors open to public | Day 1" , "17:00 – 21:30"],
        ["December 10", "Doors open to public | Day 2" , "12:00 – 22:30"],
        ["December 11", "Doors open to public | Day 3" , "12:00 – 22:30"],
      ],
    },
    {
      title: "Submission Deadlines",
      rows: [
        ["Overdue", "Activation & programming"],
        ["Overdue", "Design concept"],
        ["October 17", "Technical submission"],
        ["October 17", "DTCM documentation (Entertainers)"],
        ["October 24", "Permits & licencing application"],
        ["November 05", "Site services & additionals"],
        ["November 14", "Site access & staff accreditation"],
      ],
    },
    {
      title: "Build Milestones",
      rows: [
        ["December 06", "Installation complete ( no later than 12:00 hours)"],
        ["December 07", "Civil Defense (DCD) inspection"],
        ["October 08", "Final SOLE inspection"],
      ],
    },
    {
      title: "Load in/Build",
      rows: [
        ["5-day set up", "Anchor"],
        ["5-day set up", "Sponsor & Large Custom (including F&B) "],
        ["3-day set up", "Medium"],
        ["2-day set up", "Small"],
        ["2-day set up", "F&B"],
        ["1-day set up", "Marketplace & Sneaker Swap"],
      ],
    },
    {
      title: "Load out/Teardown",
      rows: [
        ["December 12", "Product packing and debris clearance only."],
        [
          "December 12",
          "Removal of product, loose furniture, simple fittings and fixtures. Clearance of storage, dressing rooms, and support offices.",
        ],
        [
          "December 13",
          "Removal of hard furniture, kitchen equipment, impediments, cladding, wiring, Tech, A/V, storage units, dressing rooms, and office units.",
        ],
        [
          "December 14",
          "Removal of trussing, shading, rails, electrical, major structural components, and clearance of waste.",
        ],
      ],
    },
  ];

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box style={{ width: "60%", padding: "2rem 8rem" }}>
        <Typography variant="h6">Sole DXB is back!</Typography>
        <Typography variant="body1">
          Welcome to the 2022 festival, we’re glad to have you on board.{" "}
        </Typography>
        <Typography variant="body1">
          This year, accelerate your registration experience on a platform that
          does it all – from document submissions and accreditation to site
          service orders.
        </Typography>
        <Box sx={{ mt: 5 }}>
          {table.map((tabledata) => (
            <AccordionTable data={tabledata} />
          ))}
        </Box>
        <Box
        style={{
          width: "100%",
          margin: "5rem 0",
          display: "flex",
          flexDirection: "row",

          gap: 20,
        }}
      >
        <Button
          variant="contained"
          style={{ color: "#FFF", backgroundColor: "#000" }}
          endIcon={<DownloadIcon />}
        >
          Vendor pack
        </Button>
        <Button
          variant="contained"
          style={{ color: "#FFF", backgroundColor: "#000" }}
          endIcon={<DownloadIcon />}
        >
          sustainability guide
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#FFF",
            backgroundColor: "#000",
          }}
          endIcon={<DownloadIcon />}
        >
          layout
        </Button>
      </Box>
      </Box>
     
    </Box>
  );
}

export default Home;
