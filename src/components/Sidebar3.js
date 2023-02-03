import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
function Sidebar3() {
  return (
    <div className="w-[25%] py-6 px-10">
  
        <div className="flex">
          <div className="flex flex-col items-center">
            <CheckCircleOutlineOutlinedIcon className="text-[#8553FB]"/>
            <div className="bg-[#8553FB] w-1 h-7"></div>
          </div>
          <p className="ml-3">User Information</p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
          <AdjustIcon className="text-[#8553FB]"/>
            <div className="bg-gray-300 w-1 h-7"></div>
          </div>
          <p className="ml-3">Business information</p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <FiberManualRecordOutlinedIcon className="text-gray-300"/>
            <div className="bg-gray-300 w-1 h-7"></div>
          </div>
          <p className="ml-3">Business information 2</p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <FiberManualRecordOutlinedIcon className="text-gray-300"/>
            <div className="bg-gray-300 w-1 h-7"></div>
          </div>
          <p className="ml-3">Upload Documents</p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <FiberManualRecordOutlinedIcon className="text-gray-300"/>

          </div>
          <p className="ml-3">Preview</p>
        </div>
    </div>
  );
}

export default Sidebar3;
