import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReqBlock from "./ReqBlock";

function RateCard({ data }) {
  const { title, subcat, dList, dates } = data;
  const [req, setreq] = React.useState([{}]);

  const handleAdd = () => {
    setreq([...req, {}]);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ position: "relative" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 15,
          }}
        >
          <Button variant="outlined" onClick={handleAdd}>
            Add more
          </Button>
        </Box>
        {req?.map((r, index) => (
          <ReqBlock index={index} subcat={subcat} dList={dList} dates={dates} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default RateCard;
