import { React } from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationPg from "../src/pages/Authentication";
import { PopUpScreen } from "./Components/PopUpForUserdetail";
import ProtectedRoute from "../src/routes/ProtectedRoute";
import ChatRoom from "../src/pages/ChatRoom";

import Homepage from "../src/pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        {/*  Public Page   */}
        <Route path="/authentication" element={<AuthenticationPg />} />
        <Route path="/popscreen" element={<PopUpScreen triger={true} />} />
        <Route path="/" element={<Homepage />} />
        {/* private page  */}
        <Route path="/popscreen" element={<PopUpScreen />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/chatroom" element={<ChatRoom />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
