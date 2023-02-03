import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {
  return (
    <div className='flex justify-between p-4 px-6'>
      <h1 className='text-xl font-semibold'>Dashboard</h1>
      <div className='flex items-center'>
        <PersonIcon className='bg-[#67748E] text-white rounded-full mr-2'/>
        <h1 className='text-sm text-[#67748E]'>Evan Winter</h1>
        <NotificationsIcon className='text-[#67748E]'/>
      </div>
    </div>
  )
}

export default Navbar
