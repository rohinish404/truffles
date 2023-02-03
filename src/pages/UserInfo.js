import MainComp2 from '@/components/MainComp2'
import Navbar2 from '@/components/Navbar2'
import Sidebar2 from '@/components/Sidebar2'
import React from 'react'

function UserInfo() {
  return (
    <div className='bg-gray-100'>
      <Navbar2 />
      <div className='flex'>
        <Sidebar2 />
        <MainComp2 />
      </div>
    </div>
  )
}

export default UserInfo
