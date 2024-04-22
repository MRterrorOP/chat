
import { InputBox, LoginButton } from "../Components/InputBox";
import { signInWithEmailAndPassword} from "firebase/auth";
import {  useNavigate, useLocation } from "react-router-dom";
import { auth} from "../utils/firebase";



function LoginPage(props){
  const locatin = useLocation(); 
  console.log('again render login page')
  const navigate = useNavigate(); 
  const from = locatin.state?.from?.pathname || '/chatroom';
  async function login(event) {
   
    // Prevent default form submission behavior
    event.preventDefault();
    const data = event.target;
    const formData = new FormData(data);

    // Extract email and password from formData
    const email = formData.get('email');
    const password = formData.get('password');
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('user get sing in')
      navigate(from , {replace : true});
      })
    .catch((error) =>{

    })
 
  }
 
  // Function to create a new user authentication entry in Firebase
 
    return(
      <div className="relative rounded border border-1 border-gray-200 px-4 pb-10 md:w-[400px] md:h-[600px] md:flex md:items-center md:justify-center md:flex-col">
        
        <h1 className="text-lg text-center pt-4  md:text-2xl md:mb-4" >Friend Circle</h1>
        <p className="absolute top-2 right-4 hover:text-cyan-500 hover:underline cursor-pointer" onClick={props.handleToggle}>sing up?</p>
        <form  method="post" action="/submit" className="md:w-full" onSubmit={login}>
        <InputBox type={'email'} name="email" placeholder={"email"}/>
        <InputBox type={"Password"} name="password" placeholder={"Password"}/>
        <LoginButton text={"login"} />
        </form>
      </div>
    )
    }

export default LoginPage;