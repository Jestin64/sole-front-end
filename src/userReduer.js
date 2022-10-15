export const intialState = {
    firstName: "",
    lastName:"",
    email:"",
    files:[],
    services:[],
    company:"",
    industry:"",
    mobile:"",
    password:"",
}


const userReducer = (state,action) =>{
    const {type, payload} = action;
    switch(type){
        case "Register_user":
            return {state};
        default : return;
    };
};


export default userReducer;