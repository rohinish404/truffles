import Link from 'next/link'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import ContactsIcon from '@mui/icons-material/Contacts';
// linear-gradient(95.79deg, #A76FFF 10.21%, #7445F8 100%)
function Sidebar() {
  return (
    <div className='w-[20%] p-5 text-sm'>
      <Link href='/'><img className='mb-8' src='Logo.png'></img></Link>
      <ul className='mx-auto px-2'>
          <Link href='/'><li className='mb-7 bg-white rounded p-2'><DashboardIcon className='grad  text-white rounded mr-4'/>Dashboard</li></Link>
          <Link href='/'><li className='mb-7 px-2'><ReceiptIcon className='side_btns'/>Invoice</li></Link>
          <Link href='/'><li className='mb-7 px-2 py-1 line-through'><DescriptionIcon className='side_btns'/>Proforma</li></Link>
          <Link href='/'><li className='mb-7 px-2 py-1 line-through'><SwapHorizontalCircleIcon className='side_btns'/>Swap</li></Link>
          <Link href='/'><li className='mb-7 px-2 py-1 line-through'><MoveUpIcon className='side_btns '/>Transfer</li></Link>
          <Link href='/'><li className='mb-7 px-2 py-1'><ContactsIcon className='side_btns '/>Contacts</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
