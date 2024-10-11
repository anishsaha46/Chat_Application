import React from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <form action='' className='flex items-center gap-2'>
        <input className='input input-bordered rounded-full bg-white border-cyan-500'
        placeholder='Search....'
          
        />
        <button type='submit' className='btn bg-white'>
        <FaSearch size={"24px"} />
        </button>

        </form>
        <div className='divider px-3'>
         
        </div>
        <OtherUsers/>
        <div className='mt-2'>
          <button className='btn btn-sm'>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar