import React, {useState, useEffect, useRef} from "react";
import { Box, TextField, Typography, Button , FormControl } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {storage} from "../../firebaseapp.js"
import { ref, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [selectedFile , setSelectedFile] = useState([]);
  const [UploadedURL , setUploadedURL] = useState([]);
  const [userDetails , setUserDetails] = useState({});
 
  
  
  
  const hiddenFileInput = useRef(null);

  const handleUpload = async({name , data}) => {
      // setSelectedFile(e.target?.files[0]);
      const FileRef = ref(storage, `${userDetails?.firstname}/${name}`);
      await uploadBytesResumable(FileRef, data).then((snapshot) => 
        getDownloadURL(FileRef).then(url=>setUploadedURL([...UploadedURL , {title: name , path:url}])));
          return;      
  }


  const handleFileSelect = async(e) =>{
      setSelectedFile([...selectedFile, {name: e.target.name , data : e.target.files[0]}]);
  }

  const handleUserUpdate = (e) =>{
    const temp = userDetails;
    temp[e.target.name] = e.target.value;
    setUserDetails(temp);
  }


  const handleSubmit = async() => {
    Promise.all(
      selectedFile.map(file=> handleUpload(file) )
    ).then(()=>{
      setUserDetails({...userDetails , files : UploadedURL}); 
    });
      axios.post("http://localhost:8080/user", userDetails).then((res)=>{
        console.log(res);
        if(res.status === 200){
          navigate("/home")
        }
      }).catch(error=>console.log(error.message));
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
      sx={{ m: 6 }}
    >
      <FormControl>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "60%",
        }}
        sx={{ m: 6 }}
      >
        <Box  style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          width:"100%",
        }}><TextField id="outlined-basic1" fullWidth label="First Name" name="firstname" value={userDetails?.firstname} onChange={handleUserUpdate} variant="standard"  />
        <TextField id="outlined-basic2" fullWidth label="Last Name" name="lastname" value={userDetails?.lastname} onChange={handleUserUpdate} variant="standard"  /></Box>
        <Box  style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          width:"100%",
        }}><TextField id="outlined-basic3" fullWidth label="Email" name="email" value={userDetails?.email} onChange={handleUserUpdate} variant="standard"  />
        <TextField id="outlined-basic4" fullWidth label="Mobile" name="mobile" value={userDetails?.mobile} onChange={handleUserUpdate} variant="standard"  /></Box>
        
        <TextField
          id="outlined-basic5"
          label="Company/Brand"
          variant="standard" 
          name="company" value={userDetails?.company} onChange={handleUserUpdate}
        />
        <TextField id="outlined-basic6" label="Industry" name="industry" value={userDetails?.industry} onChange={handleUserUpdate} variant="standard"  />
        <TextField id="outlined-basic7" label="Set Password" name="password" type="text" value={userDetails?.password} onChange={handleUserUpdate} variant="standard"  />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width:"100%",
          justifyContent: "center",
          alignItem:'center',
          gap: 67,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {selectedFile[0] ? <FileUploadIcon /> :
          <Button
                style={{color:"#000", borderColor:"#000", borderRadius:0}}
                variant="outlined"
                aria-label="Trade licence"
                component="label"  
                // disabled = {selectedFile ? true : false}
              >
                Upload
                <input hidden accept="image/*" ref={hiddenFileInput} onInput={handleFileSelect} name="Trade License" type="file" />
                <FileUploadIcon />
              </Button>
}
        </Box>
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
                aria-label="TRN"
                component="label"
              >
                <Typography variant="body2">TRN</Typography>
                <input hidden accept="image/*" ref={hiddenFileInput} onInput={handleFileSelect} name="TRN"   type="file" />
                <FileUploadIcon />
              </Button>
        </Box>
        <Button
          variant="contained"
          style={{ color: "gold", backgroundColor: "black", borderRadius:0 }}
          onClick={handleSubmit}
        >
          Register
        </Button>
      <img src={UploadedURL} alt="Upload" />
      </Box>
      </FormControl>
    </Box>
  );
}

export default Registration;
