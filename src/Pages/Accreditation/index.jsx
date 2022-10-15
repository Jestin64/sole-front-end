import React, {useState} from "react";
import { Box, Typography, IconButton , Button} from "@mui/material";
import {storage} from "../../firebaseapp.js"
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { ref, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Accreditation() {

  const navigate = useNavigate();
  const [selectedFile , setSelectedFile] = useState([]);
  const [UploadedURL , setUploadedURL] = useState([]);
  const [fileDetails , setFileDetails] = useState([]);

  const user = JSON.parse(localStorage.getItem('profile')).user;

  const handleFileSelect = async(e) =>{
    setSelectedFile([...selectedFile, {name: e.target.name , data : e.target.files[0]}]);
    Promise.all(
      selectedFile.map(file=> handleUpload(file) )
    ).then(()=>{
      setFileDetails({...fileDetails , files : UploadedURL}); 
    });
}

const handleUpload = async({name , data}) => {
  // setSelectedFile(e.target?.files[0]);
  const FileRef = ref(storage, `${user.firstname}/accreditation/${name}`);
  await uploadBytesResumable(FileRef, data).then((snapshot) => 
    getDownloadURL(FileRef).then(url=>setUploadedURL([...UploadedURL , {title: name , path:url}])));
      return;      
}


const handleSubmit = ()=> {
  axios.post("http://localhost:8080/user/accreditation", {accreditation : fileDetails , email : user.email}).then((res)=>{
        console.log(res);
        if(res.status === 200){
          navigate("/home")
        }
      }).catch(error=>console.log(error.message));

}

  return (
    <Box>
      <Box style={{ padding: "2rem 8rem"  }}>
        <Box>
          <Typography variant="h6">Sign Up</Typography>
          <Typography variant="body1">
          All on-site personnel must be credentialed. Please use the templates below to provide names, ID copies, and job titles for credentials to be issued.
          </Typography>
          <Typography variant="body1"><b>Note:</b></Typography>
          <ul>
            <li>Click ‘Download template’</li>
            <li>Please fill in personnel details for all fields listed in the downloaded template.</li>
            <li>Use the ‘Upload file’ button to submit the filled-in template.</li>
          </ul>
          <Typography variant="body1"><b>Deadline:</b></Typography>
          <ul>
            <li>The deadline for accreditation is November 14.</li>
          </ul>
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
            <Typography variant="body1">Use this template for access to the site on build and teardown days only. Validity of these site badges will expire on December 08 at 12:00.</Typography>
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
                aria-label="upload file - Buid and Teardown"
                component="label"
              >
                <Typography variant="body2">upload file - Buid and Teardown</Typography>
                <input hidden accept="*" onInput={handleFileSelect} name="Build and Teardown" type="file" />
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
            <Typography variant="body2">Use this template for staff or brand official accreditation on event days. Staff badges will be restricted to staff gate entry.</Typography>
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
                <Typography variant="body2">Upload File - Event days</Typography>
                <input hidden accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onInput={handleFileSelect} name="Event days" type="file" />
                <FileUploadIcon />
              </Button>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          style={{ color: "gold", backgroundColor: "black", borderRadius:0 }}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Accreditation;
