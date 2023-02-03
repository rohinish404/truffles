import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Calendar } from "react-calendar";
import Calender from "./Calender";

import Data1 from "@/Data1";
import Data from "@/Data";
function Right() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center bg-[#8553FB] p-3 text-white rounded-lg px-5 mb-6">
      <div className="flex items-center">
        <InfoOutlinedIcon />
       <div className="ml-4">
        <h1 className="text-md">Please complete the KYC</h1>
        <p className="text-xs">
          Please follow the instructions in the email to complete account
          verification. Make sure to check your promotions/spam as well.
        </p>
        </div> 
        </div>
        <CancelOutlinedIcon />
      </div>
      <div className="flex">
          
        <div className="grid grid-cols-2 gap-5">
          {Data1.map(function (item, id) {
            return (
            <div key={id} className='flex justify-between items-center comps p-6'>
                <div>
                    <p className="text-[#67748E] text-sm">{item.name}</p>
                    <h1 className="text-xl font-bold mt-2">${item.amt}</h1>
                </div>
                <div className="p-2 rounded-lg bg-[#8553FB] text-white">
                    {item.icon}
                </div>
            </div>
            );
          })}
          <img src="Chart-2.png" className="col-span-2" />
        </div>

        <div className="w-[30%] ml-5 bg-[#FFFFFF] p-4 rounded-lg">
          <Calender />
          {Data.map(function (item, id) {
            return (
              <div key={id} className="flex justify-between mt-6 text-sm">
                {item.icon}

                <div>
                  <h1>{item.name}</h1>
                  <p className="text-xs">TFID: {item.id}</p>
                </div>
                <h1>${item.amt}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Right;
