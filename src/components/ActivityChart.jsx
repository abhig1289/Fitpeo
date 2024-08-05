import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ThemeCotext } from "../context/ThemeContextProvider";

const data = [
  { name: "5", uv: 4000 },
  { name: "6", uv: 3000 },
  { name: "7", uv: 2000 },
  { name: "8", uv: 2780 },
  { name: "9", uv: 1890 },
  { name: "10", uv: 2390 },
  { name: "11", uv: 3490 },
  { name: "12", uv: 2780 },
  { name: "13", uv: 1890 },
  { name: "14", uv: 2390 },
  { name: "15", uv: 3490 },
  { name: "16", uv: 4000 },
  { name: "17", uv: 3000 },
  { name: "18", uv: 2000 },
  { name: "19", uv: 2780 },
  { name: "20", uv: 1890 },
  { name: "21", uv: 2390 },
  { name: "22", uv: 3490 },
  { name: "23", uv: 4000 },
  { name: "24", uv: 3000 },
  { name: "25", uv: 2000 },
  { name: "26", uv: 2780 },
  { name: "27", uv: 1890 },
];

const ActivityChart = () => {
  const { theme } = useContext(ThemeCotext);
  console.log(theme, "theme");
  return (
    <div className={`flex  p-2  gap-6 m-2`}>
      <div className={`w-2/3 rounded-lg shadow-lg`}>
        <h2 className="text-lg mb-4 m-4">Activity</h2>
        <ResponsiveContainer width="95%" height={200} className="m-4  ">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/4 flex flex-col justify-around rounded-lg shadow-lg">
        <button className="flex items-center  p-2 rounded-md ">
          <span className="mr-2 bg-red-500">🟠</span> Goals
        </button>
        <button className="flex items-center   p-2 rounded-md">
          <span className="mr-2 bg-blue-500">🍔</span> Popular Dishes
        </button>
        <button className="flex items-center   p-2 rounded-md ">
          <span className="mr-2 bg-green-500">📜</span> Menus
        </button>
      </div>
    </div>
  );
};

export default ActivityChart;
