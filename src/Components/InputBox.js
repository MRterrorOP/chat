// InputBox.js
import "../index.css";
import React from "react";

export const InputBox = (props) => {
  return (
    <div className="input-container flex justify-center">
      <input
        className="w-5/6 my-2 pl-6  border-slate-200 border-2 p-2"
        {...props}
        required
      />
    </div>
  );
};

export const LoginButton = (props) => {
  return (
    <div className="input-container flex justify-center">
      <button
        className=" relative w-5/6   px-4 py-2 my-2 bg-blue-200 rounded "
        type="submit"
      >
        {props.loading ? <>Loading...</> : props.text}
      </button>
    </div>
  );
};
