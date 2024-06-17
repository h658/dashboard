import Card from "@/components/main/card";
import Chart from "@/components/main/chart";
import Rightbar from "@/components/main/rightbar";
import Transaction from "@/components/main/transaction";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";


import React from "react";

function Dashboard() {
  return (
    <>
    <div>
    <div className="m-2 ml-4">
       <p className="text-2xl font-medium">Dashboard</p>
     <p className="text-green-600 font-medium"> Welcome to your Dashboard</p>
      </div>
      <div className="wrapper flex gap-10 m-3 ml-4">
        <div className="main flex  flex-col gap-5">
          <div className="cards flex flex-1 gap-x-7 justify-between ">
            <Card label={"Orders"} number={1203} icon1={<MdOutlineShoppingCart className="bg-green-200 rounded-full pt-2"/>} />
            <Card label={"Sales"} number={1450} icon2={<BiDollarCircle className="bg-green-200 rounded-full p-1" />} />
            <Card label={"Delivery"} number={1020} icon3={<TbTruckDelivery className="bg-green-200 rounded-full p-1" />}/>
          </div>
          
          <Transaction />
          <Chart/>
          
 </div>
         <div>
            <Rightbar />
            </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
