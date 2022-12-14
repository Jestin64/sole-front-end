import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RateCard from "../../Components/RateCard";

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Title', headerName: 'Title', width:550 },
  { field: 'Price', headerName: 'Price', width: 80 },
  
];

const rows = [
  { id: 1, Title: 'Entertainment permit Per submission', Price: 2500},
  { id: 2, Title: 'Rush fee Late applicant', Price: 4500},
  { id: 3, Title: 'Photography/videography | 1-day permit Per submission', Price: 500},
  { id: 4, Title: 'Photography/videography | 3-day permit Per submission', Price: 800},
  { id: 5, Title: 'Technical submission Late applicant', Price: 6800},
];

const services = [
  {
    title: "Crane",
    subcat: { title: "Tonnage", types: [20, 50] },
    dList: ["1 Day", "3 Days", "Weekly", "Extra Hour"],
    dates: [
      {
        title: "Loadin",
        val: {
          "1 Day": [
            "29-Nov-22",
            "30-Nov-22",
            "01-Dec-22",
            "02-Dec-22",
            "03-Dec-22",
            "04-Dec-22",
            "05-Dec-22",
            "06-Dec-22",
          ],
          "3 Days": [
            "29 Nov - 1 Dec",
            "30 Nov - 2 Dec",
            "1 Dec - 3 Dec",
            "2 Dec - 4 Dec",
            "3 Dec - 5 Dec",
          ],
          Weekly: ["29 Nov - 6 Dec"],
          "Extra Hour": [
            "29-Nov-22",
            "30-Nov-22",
            "01-Dec-22",
            "02-Dec-22",
            "03-Dec-22",
            "04-Dec-22",
            "05-Dec-22",
            "06-Dec-22",
          ],
        },
      },
      {
        title: "Loadout",
        val: {
          "1 Day": [
            "13-Dec-22",
            "14-Dec-22",
            "15-Dec-22",
            "16-Dec-22",
            "17-Dec-22",
            "18-Dec-22",
          ],
          "3 Days": [
            "13 Dec - 15 Dec",
            "14 Dec - 16 Dec",
            "15 Dec - 17 Dec",
            "16 Dec - 18 Dec",
          ],
          Weekly: ["13 Dec - 20 Dec"],
          "Extra Hour": [
            "13-Dec-22",
            "14-Dec-22",
            "15-Dec-22",
            "16-Dec-22",
            "17-Dec-22",
            "18-Dec-22",
          ],
        },
      },
    ],
  },
  {
    title: "Forklift",
    subcat: { title: "Tonnage", types: [5, 7] },
    dList: ["1 Day", "3 Days", "Weekly", "Extra Hour"],
    dates: [
      {
        title: "Loadin",
        val: {
          "1 Day": [
            "29-Nov-22",
            "30-Nov-22",
            "01-Dec-22",
            "02-Dec-22",
            "03-Dec-22",
            "04-Dec-22",
            "05-Dec-22",
            "06-Dec-22",
            "07-Dec-22",
            "08-Dec-22",
          ],
          "3 Days": [
            "29 Nov - 1 Dec",
            "30 Nov - 2 Dec",
            "1 Dec - 3 Dec",
            "2 Dec - 4 Dec",
            "3 Dec - 5 Dec",
            "4 Dec - 6 Dec",
            "5 Dec - 7 Dec",
            "6 Dec - 8 Dec",
          ],
          Weekly: ["29 Nov - 6 Dec"],
          "Extra Hour": [
            "29-Nov-22",
            "30-Nov-22",
            "01-Dec-22",
            "02-Dec-22",
            "03-Dec-22",
            "04-Dec-22",
            "05-Dec-22",
            "06-Dec-22",
            "07-Dec-22",
            "08-Dec-22",
          ],
        },
      },
      {
        title: "Event Days",
        val: {
          "1 Day": ["09-Dec-22", "10-Dec-22", "11-Dec-22"],
          "3 Days": ["9 Dec - 11 Dec", "10 Dec - 12 Dec"],
          Weekly: ["13 Dec - 20 Dec"],
          "Extra Hour": ["09-Dec-22", "10-Dec-22", "11-Dec-22"],
        },
      },
      {
        title: "Loadout",
        val: {
          "1 Day": [
            "13-Dec-22",
            "14-Dec-22",
            "15-Dec-22",
            "16-Dec-22",
            "17-Dec-22",
            "18-Dec-22",
          ],
          "3 Days": [
            "13 Dec - 15 Dec",
            "14 Dec - 16 Dec",
            "15 Dec - 17 Dec",
            "16 Dec - 18 Dec",
          ],
          Weekly: ["13 Dec - 20 Dec"],
          "Extra Hour": [
            "13-Dec-22",
            "14-Dec-22",
            "15-Dec-22",
            "16-Dec-22",
            "17-Dec-22",
            "18-Dec-22",
          ],
        },
      },
    ],
  },
];

function Services() {
  const [droneChecked, setDroneChecked] = React.useState(true);

  const handleDroneSwitch = (event) => {
    setDroneChecked(event.target.checked);
  };
  return (
    <Box  style={{ position: "relative" , padding: "2rem 8rem" }}>
      <div
        className="intro"
        style={{
          width: "60%",
        }}
      >
        <Typography variant="h6">Lorem Ipsum</Typography>
        <Typography variant="body1">
          Seamless and scalable site services must be procured exclusively
          through SOLE and designated partners. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Typography>
        <Typography variant="h6" sx={{ mt: 3 }}>
          On-Site Services Order Form
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          (All rates are in AED and exclusive of VAT)
        </Typography>
      </div>
      <Typography
        style={{ position: "fixed", top: 130, right: 50, fontWeight: "bold"}}
        variant="body1"
      >
        Total Cost : 0
      </Typography>
      <Accordion style={{width:"70%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#000"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Permits</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ height: 400, width: '90%' }}>
        
        <DataGrid
        style={{border:"none"}}
        rows={rows}
        columns={columns}
        checkboxSelection
      />
        </AccordionDetails>
      </Accordion>
      <FormControlLabel
        sx={{ mt: 2 }}
        labelPlacement="start"
        control={<Switch checked={droneChecked} style={{color:"#000"}} onChange={handleDroneSwitch} />}
        label="Drone Footage (Request Quote)"
      />
      {droneChecked && (
        <Box style={{ width: "60%" }} sx={{ mt: 1, mb: 2 }}>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            rows={7}
            fullWidth
          />
        </Box>
      )}
      <Typography sx={{ mt: 1, mb: 1 }} variant="h6">
        Load In/Out Plant & Machinery
      </Typography>
      {services.map((service) => (
        <RateCard data={service} />
      ))}
    </Box>
  );
}

export default Services;
