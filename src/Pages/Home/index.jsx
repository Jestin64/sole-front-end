import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccordionTable from "../../Components/AccordionTable";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  const table = [
    {
      title: "Sole DXB 2022",
      rows: [
        ["8 December", "Preview (By invitation only)"],
        ["9 December", "Film screening"],
        ["10 December", "Day 1 | Public access"],
      ],
    },
    {
      title: "Vendor Submission Deadlines",
      rows: [
        ["17 October", "Activation & programming"],
        ["17 October", "Design concept"],
        ["17 October", "Technical submission"],
        ["17 October", "DTCM documentation (Entertainers)"],
        ["24 October", "Permits & licencing application"],
        ["01 November", "Site access & staff accreditation"],
        ["04 November", "Site services & operations"],
        ["24 November", "F&B vendor licences & permits"],
      ],
    },
    {
      title: "Milestones",
      rows: [
        ["06 December", "Installation complete ( no later than 0700 hours)"],
        ["07 December", "Civil Defense (DCD) inspection"],
        ["08 October", "Final SOLE inspection"],
      ],
    },
    {
      title: "Load in/Build",
      rows: [
        ["29 November", "Installation complete ( no later than 0700 hours)"],
        ["02 December", "Sponsor & Large Custom (G)"],
        ["03 December", "Medium"],
        ["04 December", "Small"],
        ["09 December", "F&B, Marketplace & Sneaker Swap"],
      ],
    },
    {
      title: "Load out/Teardown",
      rows: [
        ["12 December", "Product packing and debris clearance only."],
        [
          "12 December",
          "Removal of product, loose furniture, simple fittings and fixtures. Clearance of storage, dressing rooms, and support offices.",
        ],
        [
          "13 December",
          "Removal of hard furniture, kitchen equipment, impediments, cladding, wiring, Tech, A/V, storage units, dressing rooms, and office units.",
        ],
        [
          "14 December",
          "Removal of trussing, shading, rails, electrical, major structural components, and clearance of waste.",
        ],
      ],
    },
  ];

  return (
    <Box style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Box style={{ width: "60%", padding: "2rem 8rem" }}>
        <Typography variant="h6">Sole DXB is back!</Typography>
        <Typography variant="body1" style={{ color: "#B89602" }}>
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
      </Box>
      <Box
        style={{
          width: "40%",
          margin: "5rem 0",
          display: "flex",
          flexDirection: "column",

          gap: 20,
        }}
      >
        <Button
          variant="contained"
          style={{ color: "#D9C677", backgroundColor: "#000" }}
          endIcon={<DownloadIcon />}
        >
          Vendor pack
        </Button>
        <Button
          variant="contained"
          style={{ color: "#D9C677", backgroundColor: "#000" }}
          endIcon={<DownloadIcon />}
        >
          sustainability guide
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#D9C677",
            backgroundColor: "#000",
          }}
          endIcon={<DownloadIcon />}
        >
          layout
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
