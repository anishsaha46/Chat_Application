import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'


const MessageContainer = () => {
  return (
    <div className='md:min-w-[550px] overflow-auto'>
      
        <div className='flex gap-2 items-center rounded-sm p-2 cursor-pointer bg-zinc-400 text-white px-4 py-2'>
          <div className='avatar online'>
            {/* shows user status whether he is online or offline */}
            <div className='w-12 rounded-full'>
              <img src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg'
                alt='user-profile'
              />
            </div>

          </div>


          <div className='flex flex-col flex-1 text-white'>
            {/* shows user status whether he is online or offline */}
            <div className='flex gap-2 flex-1 '>
              <p>Ramu</p>
            </div>

          </div>




        </div>
       <Messages/>
        
      <SendInput/>
    </div>
  )
}

export default MessageContainer