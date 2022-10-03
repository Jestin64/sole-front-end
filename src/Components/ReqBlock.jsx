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

function ReqBlock({ index, subcat, dList, dates }) {
  const [type, setType] = React.useState([]);
  const [duration, setDuration] = React.useState([]);
  const [values, setValues] = React.useState([]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleDurChange = (event) => {
    setDuration(event.target.value);
  };

  const handleValChange = (event) => {
    let temp = values;
    let key = event.target.name;
    temp[key] = event.target.value;
    setValues(temp);
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Typography sx={{ mb: 1 }} variant="body2">
        {`Request ${index + 1}`}
      </Typography>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {subcat.title}
        </FormLabel>
        <RadioGroup
          row
          value={type}
          onChange={handleTypeChange}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {subcat.types.map((ty) => (
            <FormControlLabel value={ty} control={<Radio />} label={ty} />
          ))}
        </RadioGroup>
      </FormControl>

      <Box
        style={{ display: "flex", flexDirection: "row", gap: 5 }}
        sx={{ mt: 2 }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={duration[index]}
            name={index}
            label="Duration"
            onChange={handleDurChange}
          >
            {dList.map((d) => (
              <MenuItem value={d}>{d}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {dates.map((sel, index) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{sel.title}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values ? values[index] : ""}
              label={sel?.val[duration]}
              name={index}
              onChange={handleValChange}
            >
              {sel?.val[duration]?.map((li) => (
                <MenuItem value={li}>{li}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>
    </Box>
  );
}

export default ReqBlock;
