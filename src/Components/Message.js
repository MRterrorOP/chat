import defaultpic from "./DefaultPic.jpg";
import { useEffect, useRef } from "react";

const Message = ({ userPhotoUrl, message, time, userName, lastIteration }) => {
  const lastMessage = useRef(null);

  useEffect(() => {
    if (lastIteration && lastMessage.current) {
      lastMessage.current.scrollIntoView({ behavior: "smooth" });
    }
  });
  return (
    <div
      ref={lastIteration ? lastMessage : null}
      className="h-[25px]  m-10  items-center box-border  bg-transparent   flex"
    >
      <img
        alt="profilepic"
        src={userPhotoUrl ? userPhotoUrl : defaultpic}
        className="rounded-full w-[40px] h-[40px]"
      />
      <div className="h-[60px] relative rounded-md  ml-4 flex justify-end   items-end  bg-indigo-500/30  m">
        <span className="absolute top-0 min-w-[250px]   text-sm left-2 text-white ">
          {userName}
        </span>
        <p className="bg-slate-300 h-[32px] rounded-lg box-border p-2   m-2 ">
          {message}
        </p>
      </div>
    </div>
  );
};
export default Message;
