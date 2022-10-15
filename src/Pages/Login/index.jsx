import React , {useState,useEffect} from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(()=>{
    if(user){
      navigate(-1);
    }
  },[])

  const handleForgotPassword= () => {
    axios.post("http://localhost:8080/user/forgot-password",{email : email}).then((res)=>console.log(res));
  }

  const handleLogin = () =>{
    const data = {email : email , password : password};
    axios.post("http://localhost:8080/user/login", data).then((res)=>{
        localStorage.setItem('profile', JSON.stringify({...res?.data}));
        navigate("/home");
      }).catch(error=>console.log(error));
  }



  return (
    <div style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10rem 20rem 0 20rem",
          gap: 40,
        }}
      > <Box  style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
      }}>
        <TextField id="outlined-basic" value={email} onChange={(e)=> setEmail(e.target.value) }label="Username" variant="standard" />
        <TextField id="outlined-basic" value ={password} onChange={(e)=> setPassword(e.target.value)} label="Password" variant="standard" />
        </Box>
        <Button
          variant="outlined"
          style={{
            borderColor: "#000",
            backgroundColor:"#bdbdbd",
            borderRadius:0,
            color: "#000",
            width:"300px",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
        href="/registration"
          variant="outlined"
          style={{
            borderColor: "#000",
            borderRadius:0,
            backgroundColor: "#30302f",
            color: "#fff",
            width:"300px",
          }}
        >
          Register
        </Button>
        <Button onClick={handleForgotPassword}>forgot password</Button>
        
      </Box>
    </div>
  );
}

export default Login;
