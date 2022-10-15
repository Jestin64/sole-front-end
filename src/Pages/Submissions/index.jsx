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
import axios from "axios";
import {useNavigate} from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ref, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import {storage} from "../../firebaseapp.js"


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
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [design, setDesign] = React.useState({});
  const [technical, setTechnical] = React.useState({});
  const [activation, setActivation] = React.useState({});
  const [selectedFile , setSelectedFile] = React.useState([]);
  const [UploadedURL , setUploadedURL] = React.useState([]);
  const [fileDetails , setFileDetails] = React.useState([]);
  
  const user = JSON.parse(localStorage.getItem('profile')).user;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDesignChange = (e)=>{
    setDesign({...design , [e.target.name] : e.target.checked});
  }
  const handleTechnicalChange = (e)=>{
    setTechnical({...technical , [e.target.name] : e.target.checked});
  }
  const handleActivationChange = (e)=>{
    setActivation({...activation , [e.target.name] : e.target.checked});
  }

  const handleSubmit = () =>{
    const desginSelections = Object.keys(design).filter(selection => design[selection])
    const technicalSelections = Object.keys(technical).filter(selection => technical[selection])
    const activationSelections = Object.keys(activation).filter(selection => activation[selection])
    const submission =  {design:desginSelections , technical:technicalSelections, activation:activationSelections}
    const email = JSON.parse(localStorage.getItem('profile')).user.email;
    console.log(email);
    axios.post("http://localhost:8080/user/submission", {submission : submission, email:email  }).then((res)=>{
        console.log(res);
        if(res.status === 200){
          navigate("/home")
        }
      }).catch(error=>console.log(error.message));

  }

  const handleFileSelect = async(e) =>{
    setSelectedFile([...selectedFile, {name: e.target.name , data : e.target.files[0]}]);
    console.log(e);
    Promise.all(
      selectedFile.map(file=> handleUpload(file) )
    ).then(()=>{
      setFileDetails({...fileDetails , files : UploadedURL}); 
    });
  }

  const handleUpload = async({name , data}) => {
    // setSelectedFile(e.target?.files[0]);
    const FileRef = ref(storage, `${user.firstname}/submissions/${name}`);
    await uploadBytesResumable(FileRef, data).then((snapshot) => 
      getDownloadURL(FileRef).then(url=>setUploadedURL([...UploadedURL , {title: name , path:url}])));
        return;      
  }


  return (
    <div style={{ padding: "2rem 8rem"}}>
      <div
        className="intro"
        style={{
          display: "flex",
        }}
      >
        <div className="left" style={{ width: "60%" }}>
          <Typography variant="h6">Stand-out Design</Typography>
          <Typography variant="body1">
            Create the best experience to the mutual benefit of the festival and
            your brand.
          </Typography>
          <Typography variant="body1">
            The Design Submission is a presentation that outlines the general concept and creative direction for the space, as well as the experience it creates for your audience.
          </Typography>
          <Typography variant="body1" >
            <b>Note:</b>
          </Typography>
          <ul>
            <li>Click the ‘Upload files’ button to add files from your computer.</li>
            <li>Files can be uploaded individually or as a zipped folder.</li>
            <li>Please use the check boxes to select relevant documents being submitted.</li>
          </ul>
          <Typography variant="body1" >
            <b>Deadline:</b>
          </Typography>
          <ul>
            <li>The deadline for submissions is October 17.</li>
          </ul>
        </div>
        
      </div>
      <Box sx={{ width: "65%" }}>
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
                icon={<InfoIcon style={{ color:"#000" }} />}
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
                icon={<InfoIcon style={{ color:"#000" }} />}
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
                icon={<InfoIcon style={{ color:"#000" }} />}
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
              control={<Checkbox value={design?.visual}
              onChange={handleDesignChange}
              name="visual"  />}
              
              label="3D visual in colour (Google SketchUp compatible)"
            />
            <FormControlLabel
              control={<Checkbox  value={design?.plan}
              onChange={handleDesignChange}
              name="plan" />}
              label="Plan - dimensional layout of major unit components"
            />
            <FormControlLabel
              control={<Checkbox value={design?.elavation}
              onChange={handleDesignChange}
              name="elavation" />}
              label="Elevations – dimensional layout of all unit elements"
            />
            <FormControlLabel
              control={<Checkbox value={design?.material}
              onChange={handleDesignChange}
              name="material" />}
              label="Material sample board (On SOLE’s request)"
            />
          </FormGroup>
          <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="upload file"
                component="label"
              >
                <Typography variant="body2">Upload File - Event days</Typography>
                <input hidden accept="*" onInput={handleFileSelect} name="Event days" type="file" />
                <FileUploadIcon />
              </Button>
              <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="upload file"
                component="label"
              >
                <Typography variant="body2">Upload File - Event days</Typography>
                <input hidden accept=".zip" onInput={handleFileSelect} name="test.zip" type="file" />
                <FileUploadIcon />
              </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value={technical?.["Plan and layout"]}
              onChange={handleTechnicalChange}
              name="Plan and layout" />}
              label="Plan and layout - GA & power (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Elavations}
              onChange={handleTechnicalChange}
              name="Elavations" />}
              label="Elevations (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Sections}
              onChange={handleTechnicalChange}
              name="Sections" />}
              label="Sections (dimensioned and annotated)"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Spot}
              onChange={handleTechnicalChange}
              name="Spot" />}
              label="Spot details – junctions, skirting, light boxes, drawers etc."
            />
            <FormControlLabel
              control={<Checkbox value={technical?.MaterialFinishes}
              onChange={handleTechnicalChange}
              name="MaterialFinishes"/>}
              label="Material finishes specificationsSpot details – junctions, skirting, light boxes, drawers etc."
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Electrical}
              onChange={handleTechnicalChange}
              name="Electrical" />}
              label="Electrical load schedule"
            />
            <FormControlLabel control={<Checkbox value={technical?.Wiring}
              onChange={handleTechnicalChange}
              name="Wiring" />} label="Wiring diagram" />
            <FormControlLabel
              control={<Checkbox value={technical?.Smoke}
              onChange={handleTechnicalChange}
              name="Smoke" />}
              label="Smoke alarms and extinguisher plan"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Emergency}
              onChange={handleTechnicalChange}
              name="Emergency" />}
              
              label="Emergency exits and evacuation plan"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Structural}
              onChange={handleTechnicalChange}
              name="Structural" />}
              
              label="Structural and wind load calculations (SAAP & STAAD)"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Capacity}
              onChange={handleTechnicalChange}
              name="Capacity" />}
              
              label="Capacity calculations"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Schedule}
              onChange={handleTechnicalChange}
              name="Schedule" />}
              
              label="Schedule for fabrication, installation and deconstruction"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Contact}
              onChange={handleTechnicalChange}
              name="Contact" />}
              
              label="Contact details - agency and production fabricators/installers"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Fabricator}
              onChange={handleTechnicalChange}
              name="Fabricator" />}
              
              label="Fabricator/contractor - trade licence and appointment letters"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Method}
              onChange={handleTechnicalChange}
              name="Method" />}
              
              label="Method statement for installation and tear down"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Liabiliy}
              onChange={handleTechnicalChange}
              name="Liabiliy" />}
              
              label="3rd party liability insurance"
            />
            <FormControlLabel
              control={<Checkbox value={technical?.Sustainability}
              onChange={handleTechnicalChange}
              name="Sustainability" />}
              
              label="Sustainability plan"
            />
          </FormGroup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value={activation?.Key}
              onChange={handleActivationChange}
              name="Key" />}
              
              label="Key product drops/releases"
            />
            <FormControlLabel
              control={<Checkbox value={activation?.Activation}
              onChange={handleActivationChange}
              name="Activation" />}
              
              label="Activation format"
            />
            <FormControlLabel
              control={<Checkbox value={activation?.Potential}
              onChange={handleActivationChange}
              name="Potential"  />}
              
              label="Any other potential programming"
            />
            <FormControlLabel
              control={<Checkbox value={activation?.Exclusive}
              onChange={handleActivationChange}
              name="Exclusive" />}
              
              label="Exclusive collections (if any)"
            />
            <FormControlLabel
              control={<Checkbox value={activation?.Special}
              onChange={handleActivationChange}
              name="Special" />}
              
              label="Special offers/competitions"
            />
            <FormControlLabel
              control={<Checkbox value={activation?.Entertainer}
              onChange={handleActivationChange}
              name="Entertainer" />}
              
              label="Entertainer DTCM documentation (if applicable)"
            />
          </FormGroup>
        </TabPanel>
       
          <Button variant="contained" onClick={handleSubmit} style={{borderRadius:0 , color:"#fff", backgroundColor:"#000"}} sx={{  mt:3}} >
            Submit
          </Button>
      </Box>
    </div>
  );
}

export default Submissions;
