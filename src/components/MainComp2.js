import Link from "next/link";
import React from "react";

function MainComp2() {
  return (
    <div className="w-[75%] p-8 bg-white text-md">
      <h1 className="font-bold text-lg">User Information</h1>
      <p className="mb-8">Please enter your details</p>
      <div className="flex justify-between">
        <div>
        <p>Title</p>
          <select className="border-2 w-full py-1.5 rounded mb-5" name="title" id="title">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>
        <div >
          <p>First Name</p>
          <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" className="border" />
        </div>
        <div>
          <p>Last Name</p>
          <input className="border-2 w-full py-2 rounded-lg mb-5" type="text" className="border" />
        </div>
      </div>
      <p>Mobile</p>
      <div className="flex justify-between">
        <select className="border-2 h-full py-2.5 px-1 rounded-lg mr-2" name="number" id="number">
          <option value="US">US</option>
        </select>
        <input className="px-2 border-2 w-full py-2 rounded-lg mb-5"
          type="number"
          placeholder="+1 (555) 987-6543"
        />
      </div>
      <p>Gender</p>
      <select className="border-2 w-full py-2 rounded-lg mb-5" name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p>Nationality</p>
      <select className="border-2 w-full py-2 rounded-lg mb-5" name="nationality" id="nationality">
          <option value="United States">United States</option>
        </select>

        <div>
            <div>
            <p>Residential Address</p>
            <input className="border-2 w-full py-2 rounded-lg mb-5" type='text'/>
            </div>
            <div>
            <p>Postal Code</p>
            <input className="border-2 w-full py-2 rounded-lg mb-5" type='text'/>
            </div>
        </div>
        <p>Occupation</p>
        <input className="border-2 w-full py-2 rounded-lg mb-5" type='text'/>
        <p>Date of Birth</p>
        <input className="border-2 w-full py-2 rounded-lg mb-5 px-2" type='date' />
        <div className="flex justify-between">
              <button className="border-2 rounded py-1 px-7">Back</button>
              <Link href='BusinessInfo'><button className="bg-[#8553FB] text-white rounded py-1 px-7">Next</button></Link>
          </div>
    </div>
  );
}

export default MainComp2;
