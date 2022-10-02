import React from "react";
import {
  Button,
  Typography,
  Box,
  Tabs,
  Tab,
  Tooltip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Submissions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ margin: "5rem" }}>
      <div
        className="intro"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="left" style={{ width: "60%" }}>
          <Typography variant="h6">Stand-out Design</Typography>
          <Typography variant="body1">
            Create the best experience to the mutual benefit of the festival and
            your brand. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </Typography>
        </div>
        <div className="right">
          <Button variant="contained" sx={{ bgcolor: "#000", color: "#fff" }}>
            Submit
          </Button>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tooltip
              arrow
              title="A presentation that outlines the general concept and creative direction for the space and experience communicated through mood boards, a brief description, and supporting visuals or sketches. 
Refer Sections 6.b and 7 in the Vendor Pack for more details.
"
              placement="right"
            >
              <Tab
                icon={<InfoIcon style={{ color: "DECF8A" }} />}
                iconPosition="end"
                label="Design Concept"
                {...a11yProps(0)}
              />
            </Tooltip>
            <Tooltip
              arrow
              title="Technical information to support your Design Concept, in compliance with local building rules and regulations of both Dubai Municipality and Civil Defence. 
Refer Sections 6.c and 7 in the Vendor Pack for more details.
"
              placement="right"
            >
              <Tab
                icon={<InfoIcon style={{ color: "DECF8A" }} />}
                iconPosition="end"
                label="Technical Submission"
                {...a11yProps(1)}
              />
            </Tooltip>
            <Tooltip
              arrow
              title="Promotional activities planned at the festival that require pre-approval in writing by SOLE and DTCM permits.
Refer Sections 2.f and 6.a in the Vendor Pack for more details.
"
              placement="right"
            >
              <Tab
                icon={<InfoIcon style={{ color: "DECF8A" }} />}
                iconPosition="end"
                label="Activation & Programming"
                {...a11yProps(2)}
              />
            </Tooltip>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox d />}
              label="3D visual in colour (Google SketchUp compatible"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Plan - dimensional layout of major unit components"
            />
            <FormControlLabel
              control={<Checkbox d />}
              label="Elevations – dimensional layout of all unit elements"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Material sample board (On SOLE’s request)"
            />
          </FormGroup>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox d />}
              label="Plan and layout - GA & power (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Elevations (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox d />}
              label="Sections (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Spot details – junctions, skirting, light boxes, drawers etc."
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Material finishes specificationsSpot details – junctions, skirting, light boxes, drawers etc."
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Electrical load schedule"
            />
            <FormControlLabel control={<Checkbox />} label="Wiring diagram" />
            <FormControlLabel
              control={<Checkbox />}
              label="Smoke alarms and extinguisher plan"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Emergency exits and evacuation plan"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Structural and wind load calculations (SAAP & STAAD)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Capacity calculations"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Schedule for fabrication, installation and deconstruction"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Contact details - agency and production fabricators/installers"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fabricator/contractor - trade licence and appointment letters"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Method statement for installation and tear down"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sustainability plan"
            />
          </FormGroup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox d />}
              label="Key product drops/releases"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Activation format"
            />
            <FormControlLabel
              control={<Checkbox d />}
              label="Any other potential programming"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Exclusive collections (if any)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Special offers/competitions"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Entertainer DTCM documentation (if applicable)"
            />
          </FormGroup>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Submissions;
