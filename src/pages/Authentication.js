import { useState, useEffect } from "react";
import {   Navigate, useLocation } from "react-router-dom";
import SignUpPage from "./SignUp";
import LoginPage from "./Loginpage";
import { auth } from "../utils/firebase";


export default function AuthenticationPg(){
  const  [ isLoding , setIsLoading] = useState(true);
  const  [toggle, setToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      
      setIsLoading(false); // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);
  
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  if (isLoding){
    return (
      <div>loading....</div>
    )
  }
  if(!auth.currentUser){
    return(
      toggle ? <SignUpPage  handleToggle={handleToggle}/> : <LoginPage handleToggle={handleToggle} />
    )
  }
  return(   
    <Navigate to="/chatroom" state={{ from: location }} replace />
  )
  
  
  

}