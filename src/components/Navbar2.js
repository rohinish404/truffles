import Link from 'next/link'
import React from 'react'

function Navbar2() {
  return (
    <div className='flex items-center justify-between p-4 border px-6 bg-white'>
     <Link href='/'> <img src="Logo.png" alt="" /></Link>
      <div>
          <p className='text-[#202020]'>Having trouble? <span className='text-[#8553FB]'>Get Help</span></p>
      </div>
    </div>
  )
}

export default Navbar2
