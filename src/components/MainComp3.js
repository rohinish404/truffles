import React from "react";

function MainComp3() {
  return (
    <div className="w-[75%] p-8 bg-white">
      <h1 className="font-bold text-lg">Business Information</h1>
      <p className="text-gray-400 mb-5">Use a permanent address where you can receive mail.</p>
      <p>Account ID</p>
      <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" />
      <p>Company Name</p>
      <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" />
      <div className="flex justify-between mb-5">
        <div>
          <p>Country Of Incorporation</p>
          <select className="border-2 w-full py-2 rounded-lg" name="cars" id="cars">
            <option value="United States">United States</option>
          </select>
        </div>
        <div>
            <p>Country Of Operation</p>
            <select className="border-2 w-full py-2 rounded-lg" name="cars" id="cars">
            <option value="United States">United States</option>
          </select>
        </div>
      </div>
      <p>Business Type</p>
      <select className="border-2 w-full py-2 rounded-lg mb-5" name="cars" id="cars">
            <option value="United States">United States</option>
          </select>
          <p>Company address</p>
          <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" />
          <div className="flex justify-between mb-5">
              <div>
                  <p>ZIP / Postal</p>
                  <input className="border-2 w-full py-2 rounded-lg" type="text" />
              </div>
              <div>
                  <p>State / Province</p>
                  <input className="border-2 w-full py-2 rounded-lg" type="text" />
              </div>
              <div>
                  <p>City</p>
                  <input className="border-2 w-full py-2 rounded-lg" type="text" />
              </div>
          </div>
          <p>Registration Number</p>
          <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" />
          <p>Incorporation Date</p>
          <input className="border-2 w-full py-2 rounded-lg mb-5 px-2" type="date" />
          <div className="flex justify-between">
              <button className="border-2 rounded py-1 px-7">Back</button>
              <button className="bg-[#8553FB] text-white rounded py-1 px-7">Next</button>
          </div>
    </div>
  );
}

export default MainComp3;
