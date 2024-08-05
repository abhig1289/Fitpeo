import {
  ChartColumn,
  Clipboard,
  HomeIcon,
  LaptopMinimal,
  Settings,
  UserCircleIcon,
  Wallet,
} from "lucide-react";
import React from "react";

const SideBarNavItems = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Performances",
    path: "/",
    icon: <ChartColumn />,
  },
  {
    name: "Application",
    path: "/application",
    icon: <LaptopMinimal />,
  },
  {
    name: "Wallet",
    path: "/",
    icon: <Wallet />,
  },
  {
    name: "Menu",
    path: "/",
    icon: <Settings />,
  },
  {
    name: "Permissions",
    path: "/",
    icon: <Clipboard />,
  },
  {
    name: "User",
    path: " ",
    icon: <UserCircleIcon />,
  },
];

export default SideBarNavItems;
