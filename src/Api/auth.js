import { ToastContainer, toast } from "react-toastify";
import axios from "axios";




export const handleSubmitSignIn = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth/signin", {
      username: username,
      password: password,
    });

    const { token } = res.data;
    localStorage.setItem("user", token);
    return { error: null };
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    console.log(errorMessage);
    return { error: errorMessage };
  }
};



  export const handleSubmitSignUp=async(username,email,password,confirmPassword)=>{
    try {
      const res = await axios.post("http://localhost:3001/api/auth/signup",{username:username,email:email,password:password,confirmPassword:confirmPassword});
      return { error : null}
    } catch (error) {
      return {error:error?.response?.data?.message};
    }

  }

  export const  getUser=async()=>{
    try{
      const token = localStorage.getItem('user');
      const user_info=await axios.post("http://localhost:3001/api/auth/fetchUser",{},{headers:{'authorization':token?`${token}`:" "}})
      return {user:user_info,error:null}
    }catch(error)
    {
      return {error:error.response.data.message};
    }
  }