import Navbar2 from '@/components/Navbar2'
import React from 'react'
import MainComp3 from '@/components/MainComp3'
import Sidebar3 from '@/components/Sidebar3'
function BusinessInfo() {
  return (
    <div className='bg-gray-100'>
      <Navbar2 />
      <div className='flex'>
      <Sidebar3 />
        <MainComp3 />
       
      </div>
      
    </div>
  )
}

export default BusinessInfo
