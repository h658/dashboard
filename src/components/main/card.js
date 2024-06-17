"user client";
import React from "react";

function Card({ label, number, icon1, icon2, icon3 }) {
  return (
    <>
      <div className="bg-white  w-72 h-36  ">
        
        <p className="text-gray-500 m-2 ml-7"> {label}</p>
        <div className="flex items-center gap-x-10 ml-7 pb-5 ">
          <div>
            <p className="font-medium text-5xl"> {number}</p>
          </div>
        <div>
          <span className="text-6xl "> {icon1}</span>
          <span className="text-6xl "> {icon2}</span>
          <span className="text-6xl "> {icon3}</span>
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
