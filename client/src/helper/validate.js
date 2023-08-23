import toast from "react-hot-toast";
//verify the username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username is required...');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Username is invalid...!')
    }
    return error;

}