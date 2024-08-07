import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputBox, LoginButton } from "../Components/InputBox";
import { auth  } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUpPage(props){
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const from = location.state?.from?.pathname || '/chatroom';

  async function Signup(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    const data = event.target;
    const formData = new FormData(data);

    // Extract email and password from formData
    const email = formData.get('email');
    const password = formData.get('password');
    
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('user get sign up')
      navigate(from , {replace : true});
      })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      
    })
    
  }
 
  // Function to create a new user authentication entry in Firebase
 
    return(
      <div className="loginBox relative  mx-auto w-4/5  flex justify-center flex-col mt-12  rounded border border-1 border-gray-200 px-4 pb-10 md:w-[400px] md:h-[600px] md:flex md:items-center md:mt-12  md:justify-center md:flex-col">
        
        <h1 className="text-lg text-center pt-4  md:text-2xl md:mb-4" >Friend Circle</h1>
        <p className="absolute top-2 right-4 hover:text-cyan-500 hover:underline cursor-pointer" onClick={props.handleToggle}>login?</p>
        <form  method="post" action="/submit" className="md:w-full" onSubmit={Signup}>
        <InputBox type={'email'} name="email" placeholder={"email"}/>
        <InputBox type={"Password"} name="password" placeholder={"Password"}/>
        <LoginButton text={"Register"} />
        </form>
      </div>                  
    )
    }
export default SignUpPage;
