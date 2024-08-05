import React from "react";

const Card = ({ title, value, icon, percentage, bgColor }) => {
  return (
    <div className=" p-4 m-2 mt-2 lg:w-[100%]  flex flex-col justify-between rounded-lg shadow-2xl">
      <div className="text-2xl font-bold flex flex-row justify-between">
        <div className={`mt-1 ${bgColor} rounded-md p-1`}> {icon}</div>
      </div>
      <div className="text-sm">{title}</div>
      <div className="flex justify-between mt-2">
        <h2 className="text-3xl"> {value}</h2>
        {percentage && (
          <div className="m-3 text-xs">
            {percentage}% <span className="text-green-500">↑</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
