import React from 'react'
import { IoSend } from "react-icons/io5";
const SendInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='m-full relative'>
            <input
            className='border text-sm rounded-lg block w-full bg-gray-600 text-white p-5 border-zinc-500'
            type='text'
            placeholder='Send a message...'></input>
            <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
              <IoSend/>
            </button>
        </div>
    </form>
  )
}

export default SendInput