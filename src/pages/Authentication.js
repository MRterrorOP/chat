import { useState } from "react";
import SignUpPage from "./SignUp";
import LoginPage from "./Loginpage";


export default function AuthenticationPg(){
  
  const  [toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return(
    toggle ? <SignUpPage  handleToggle={handleToggle}/> : <LoginPage handleToggle={handleToggle} />
  )

}