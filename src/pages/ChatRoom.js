import React from "react";
import { InputBox } from "../Components/InputBox";
import Contact from "../Components/Contact";
import zoroImage from '../Components/zoro.jpeg';
import { Database } from "firebase/database";
function ChatRoom(){
  
  return(
  <>
    <div className="absolute top-0 bg-header-500 w-full h-16"> </div>
    <input type="text" className="  w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-blue-500" placeholder="Enter your text..."/>

  </>
  )
}
export default ChatRoom;