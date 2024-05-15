import defaultpic from "./DefaultPic.jpg";
const Message = ({ userPhotoUrl, message, time, userName }) => {
  return (
    <div className="h-[25px] m-10    justify-center items-center box-border  bg-transparent w-fit max-w-[250px] flex">
      <img
        alt="profilepic"
        src={userPhotoUrl ? userPhotoUrl : defaultpic}
        className="rounded-full w-[40px] h-[40px]"
      />
      <div className="h-[60px] relative rounded-md  ml-4 flex justify-end   items-end  bg-indigo-500/30  m">
        <span className="absolute top-0 text-sm left-2 text-white ">
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
