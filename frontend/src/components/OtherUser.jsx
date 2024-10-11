import React from 'react'

const OtherUser = () => {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
                <div className='avatar online'>
                    {/* shows user status whether he is online or offline */}
                    <div className='w-12 rounded-full'>
                        <img src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg'
                            alt='user-profile'
                        />
                    </div>

                </div>


                <div className='flex flex-col flex-1'>
                    
                    <div className='flex gap-2 flex-1'>
                        <p>Ramu</p>
                    </div>

                </div>

   


            </div>
            <div className='divider my-0 py-0'>
             
            </div>
    </div>
  )
}

export default OtherUser