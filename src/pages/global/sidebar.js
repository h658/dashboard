"use client";
import { RiDashboardFill } from "react-icons/ri";
import { RiBriefcaseFill } from "react-icons/ri";
import { RiListCheck } from "react-icons/ri";
import { RiMapPinRangeFill } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import SideItem from "@/components/sideitems";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from 'next/router';

import Link from "next/link";



const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");

  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    return setOpen(!open);
  };

  return (
    <aside className="flex flex-col left-0 inset-y-0 ">
      <div
        className={`bg-green-500  h-full p-5 pt-5 ${
          open ? "w-52" : "w-24"
        } duration-300 relative `}
      >
        <div className="flex space-x-16">
          <div
            className="bg-white rounded-full absolute -right-3 top-2 border border-green-700"
            onClick={handleToggle}
          >
            <span className=" hover:cursor-pointer">
              <RiArrowLeftDoubleFill
                className={`text-2xl text-green-700 cursor-pointer ${
                  !open && "rotate-180"
                }`}
              />
            </span>
          </div>
        </div>

        <ul>
          <div className="mb-4">
            <li
              className={`p-2  ${
                open ? "pl-11" : "pl-0"
              } hover:cursor-pointer duration-300`}
            >
              <p className=" mb-3 ml-1 text-xl font-semibold text-white">
                Admin
              </p>
              <Avatar>
                {" "}
                <AvatarImage src="./images/girl.png" />
              </Avatar>
            </li>
            <div
              className={`pl-5 text-xl text-white font-semibold  ${
                !open && "hidden "
              }`}
            >
              Anne Sawyer
            </div>
            <span
              className={`pl-11 font-medium mb- text-white  ${
                !open && "hidden "
              }`}
            >
              VP Admin
            </span>
          </div>
          <Link href="/dashboard">
    
              <SideItem
              icons={<RiDashboardFill />}
              label={"Dashboard"}
              open={open}
              />
       </Link>
       <Link href="/products">
            <SideItem
            icons={<RiBriefcaseFill />}
            label={"Products"}
            open={open}
            to="/products"
          />
      </Link>
          <SideItem icons={<RiListCheck />} label={"Categories"} open={open} />
          <SideItem
            icons={<RiMapPinRangeFill />}
            label={"Shipping"}
            open={open}
          />
          <SideItem icons={<MdPeople />} label={"Customers"} open={open} />
          <SideItem
            icons={<MdOutlineSettings />}
            label={"Settings"}
            open={open}
          />
          <SideItem icons={<MdOutlineLogout />} label={"Logout"} open={open} />
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
