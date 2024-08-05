import { CircleArrowLeft, CircleArrowRight, Laptop } from "lucide-react";
import React, { useState } from "react";
import SideBarNavItems from "./SidebarNavItems";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${
        isOpen ? "w-64" : "w-20"
      } border-r-2 border-black dark:border-gray-600 dark:bg-gray-900 dark:text-white `}
    >
      <h1 className="text-2xl font-bold mt-4 text-center italic flex ml-2">
        <Laptop className="mt-1 mr-4 " />
        {isOpen && <>Dashboard</>}
      </h1>
      <ul className="flex flex-col mt-5 text-xl">
        {SideBarNavItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            {item.icon}
            {isOpen && <span className="hidden md:inline">{item.name}</span>}
          </li>
        ))}
      </ul>
      <div
        className={`fixed bottom-0 ${isOpen ? "left-56" : "left-6"} mb-4 mr-4 `}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CircleArrowLeft /> : <CircleArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
