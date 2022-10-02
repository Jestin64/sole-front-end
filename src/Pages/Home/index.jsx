import React from "react";
import { Box, Typography } from "@mui/material";
import AccordionTable from "../../Components/AccordionTable";

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
  ];

  return (
    <Box style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Box style={{ width: "70%", padding: "2rem 12rem" }}>
        <Typography variant="h6">Sole DXB is back!</Typography>
        <Typography variant="body1" style={{ color: "#B89602" }}>
          Welcome to the 2022 festival, we’re glad to have you on board.{" "}
        </Typography>
        <Typography variant="body1">
          This year, accelerate your registration experience on a platform that
          does it all – from document submissions and accreditation to site
          service orders.
        </Typography>
        {table.map((tabledata) => (
          <AccordionTable data={tabledata} />
        ))}
      </Box>
      <Box style={{ width: "30%" }}>HI</Box>
    </Box>
  );
}

export default Home;
