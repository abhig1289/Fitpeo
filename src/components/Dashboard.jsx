import {
  BaggageClaim,
  ChartNoAxesCombined,
  MonitorCheck,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import ActivityChart from "./ActivityChart";
import Card from "./Card";
import OrderFeedback from "./OrdersFeedback";

const Dashboard = ({ isOpen }) => {
  return (
    <div className=" overflow-y-auto rounded-lg shadow-lg">
      <h1 className={`text-black dark:text-white text-2xl  text-bolder ml-4`}>
        Dashboard
      </h1>
      <div className="flex gap-4 rounded-lg ">
        <Card
          title="Total Orders"
          value={75}
          bgColor={"bg-orange-400"}
          icon={<ShoppingBasket />}
          percentage={3}
        />
        <Card
          title="Total Delivered"
          value={70}
          icon={<ShoppingCart />}
          bgColor={"bg-green-400"}
          percentage={-3}
        />
        <Card
          title="Total Cancelled"
          value={5}
          icon={<BaggageClaim />}
          bgColor={"bg-red-400"}
          percentage={3}
        />
        <Card
          title="Total Revenue"
          value="$12k"
          icon={<MonitorCheck />}
          bgColor={"bg-yellow-400"}
          percentage={0}
        />
        <Card
          title="Net Profit"
          value="$6759.25"
          bgColor={""}
          percentage={10}
          icon={<ChartNoAxesCombined />}
        />
        {/* <ProgressCircle percentage={70} /> */}
      </div>
      <ActivityChart />
      <OrderFeedback />
    </div>
  );
};

export default Dashboard;
