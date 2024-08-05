import {
  CircleUserRound,
  Mail,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import React, { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeCotext);
  return (
    //     <div className="bg-gray-900 text-white-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
    //       <div>
    //         <input
    //           type="search"
    //           className="rounded-xl p-2 w-[30vw] m-2 bg-gray-700 text-white-900 border-b border-gray-300 p-4  dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //           placeholder="Search..."
    //         />
    //         <button className="bg-gray-800 text-white rounded-xl p-2 mt-2">
    //           Search
    //         </button>
    //       </div>
    //       <div>

    // </div>
    //     </div>
    <div
      className=" h-16  px-4
    bg-white-900 text-black-900 border-b-2 border-black p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white"
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-white-900 text-black-900 border-black border-2  px-4 py-2 rounded-md focus:outline-none dark:bg-gray-900 dark:text-white "
      />
      <div className="ml-auto flex items-center space-x-4">
        <Mail />
        <Settings />
        <button className="text-2xl text-dark" onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        <CircleUserRound />
      </div>
    </div>
  );
};

export default Navbar;
