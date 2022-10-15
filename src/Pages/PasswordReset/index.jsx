import React , {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {Box, TextField, Button} from "@mui/material";

const PasswordReset = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [newPassword , setNewPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/forgot-password/${params.email}/${params.token}`).then(res=>console.log(res));
    }, []);

    const handleSubmit = () => {
        if(newPassword !== "" && newPassword === confirmPassword){
            const data = {email: params.email, password: newPassword}
            axios.post("http://localhost:8080/user/reset-password",data).then(res=>{
                localStorage.clear(); 
                navigate("/");
            });
        }else{
            alert("Passwords dont match")
        }
    }

    return (
        <Box sx={{mt:20}} style={{display: 'flex', flexDirection:"column",width: '100%', gap:20, alignItems: 'center'}}>
           <TextField id="outlined-basic"  label="Email" disabled value={params.email} variant="outlined"/>
           <TextField id="outlined-basic" label="New Password" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} variant="standard"/>
           <TextField id="outlined-basic" label="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} variant="standard"/>
            <Button sx={{mt:3}} variant="outlined" style={{borderRadius:0}} onClick={handleSubmit}>Reset Password</Button>
        </Box>
        
    );

}


export default PasswordReset;