import { useState } from "react";
import { updateProfile } from "firebase/auth";
import {auth } from '../utils/firebase'
export function PopUpScreen(props){
  const [fileUpload, SetfileUpload] = useState('');
  const [username, SetUsername] = useState('');

  const handleProfileUpdate = (event)=>{
    event.preventDefault()
    console.log('try to change user')
    updateProfile(auth.currentUser, {
      displayName:username

      
    }).then(()=>{
      console.log('profile updated successfully')
      window.location.reload();
    }).catch((error)=>{
      console.log(error.message, error.message, )
    })
  }
  const handlefileUpload = (event) =>{
    
    const file = event.target.files[0];
    
    if (file.type.includes('image') ){
      SetfileUpload('bg-green-400');
    }
  }
  return  (props.triger) ?(<div className="blurry">
  <div className="absolute backdrop-blur-sm shadow-lg top-[20%] right-[34%]   shadow-indigo-800/20   flex justify-center content-around w-1/3 h-[400px] bg-indigo-300/30 rounded-lg ">
    <form onSubmit={handleProfileUpdate}  className="mt-16">
      <label className="p-14 text-xl " htmlFor='username'>
        Set Profile Name
      </label><br></br>
      <input className="mt-2 shadow-lg outline-blue-500   shadow-indigo-500/40" placeholder="Enter your full name." type="text" name="username" id="username" onChange={(event)=>{
        SetUsername(event.target.value)
      }} required /><br></br>
      <br></br>
      <label className={`absolute ${fileUpload} shadow-indigo-500/40 text-xl shadow-2xl cursor-pointer rounded-lg bg-indigo-300 hover:bg-indigo-500  p-6 m-[8px]`}  htmlFor='dpPhoto'>
        <span className="text-3xl px-1 ">+</span>Upload Profile Photo
      </label><br></br>
      <input className={`hidden`} type="file" name="dpPhoto" id="dpPhoto" accept=".jpeg, .png, .jpg" onChange={handlefileUpload}/>
      <button  type='submit' className="bg-indigo-400 hover:bg-indigo-500 absolute bottom-20 
       text-black ml-24" >Upload</button>
    </form>
  </div>
  </div>): '';
    
  
}