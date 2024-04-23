import {React} from "react";
import { Route,  Routes } from "react-router-dom";
import AuthenticationPg from '../src/pages/Authentication'

import ProtectedRoute from '../src/routes/ProtectedRoute'
import ChatRoom from '../src/pages/ChatRoom'

import Homepage from "../src/pages/Homepage";


function App(){
  console.log('calling app')
 
  
  return(
  <>
  

      <Routes>
        {/*  Public Page   */}
        <Route  path="/authentication" element={<AuthenticationPg/>}/>
        <Route  path="/" element={<Homepage/>} />
        {/* private page  */}
        <Route element={<ProtectedRoute  />}>
          <Route  path="/chatroom" element={<ChatRoom />} />
        </Route>

      </Routes>
    
  </>
  );
}
export default App;