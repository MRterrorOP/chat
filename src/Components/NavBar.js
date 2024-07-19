import DefaultImg from "./DefaultPic.jpg";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const [isPhotoUrl, setPhotoUrl] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setPhotoUrl(user.photoURL);
      // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);

  return props.triger ? (
    <>
      <div
        className="absolute top-[0%] flex justify-end items-center mr-[1%] left-1/4 h-10 bg-white bg-gradient-to-br from-opacity-10 to-opacity-10 bg-opacity-10 w-3/4 h-1/12 backdrop-filter content-center backdrop-blur-lg border
      border-slate-600  rounded-lg shadow-lg"
      >
        {isPhotoUrl ? (
          <img
            className=" w-12 mr-[2%]  hover:border-4 hover:border-blue-600 cursor-pointer right-4 top-8  rounded-full h-12 "
            onClick={props.trigerProfile}
            alt="Profile"
            src={isPhotoUrl}
          ></img>
        ) : (
          <img
            className=" w-12 mr-[2%]  hover:border-4 hover:border-blue-600 cursor-pointer right-4 top-8  rounded-full h-12 "
            onClick={props.trigerProfile}
            alt="Profile"
            src={DefaultImg}
          ></img>
        )}
      </div>
    </>
  ) : (
    ""
  );
};
export default NavBar;
